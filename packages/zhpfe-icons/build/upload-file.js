/* eslint-disable no-console */
/* eslint-disable radix */
const qiniu = require('qiniu');

const accessKey = 'HI0qreiv9k6QWZGc4HTKdiTh1-YiEw7CQTi7nh7A';
const secretKey = 'Y4F_b-6I__OIjOQU7jg0WeqDOx4YWEqHUgxfoYW2';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const bucket = 'static950609';

const putPolicy = new qiniu.rs.PutPolicy({
  scope: bucket,
});
const uploadToken = putPolicy.uploadToken(mac);

const config = new qiniu.conf.Config();

function deleteIconFile() {
  const bucketManager = new qiniu.rs.BucketManager(mac, config);

  const options = {
    limit: 10,
    prefix: 'rk-icon',
  };

  return new Promise((resolve) =>
    bucketManager.listPrefix(bucket, options, (err, respBody, respInfo) => {
      if (err) {
        console.log(err);
        throw err;
      }
      if (respInfo.statusCode === 200) {
        const { items } = respBody;
        const deleteOperations = items.map((item) => qiniu.rs.deleteOp(bucket, item.key));
        if (deleteOperations.length) {
          deleteOps(bucketManager, deleteOperations).then(resolve);
        } else {
          resolve();
        }
      }
    }),
  );
}

function deleteOps(bucketManager, deleteOperations) {
  return new Promise((resolve) =>
    bucketManager.batch(deleteOperations, (err, respBody, respInfo) => {
      if (err) {
        console.log(err);
        // throw err;
      } else if (parseInt(respInfo.statusCode / 100) === 2) {
        respBody.forEach((item) => {
          if (item.code === 200) {
            console.log(`${item.code}\tsuccess`);
          } else {
            console.log(`${item.code}\t${item.data.error}`);
          }
        });
        resolve();
      } else {
        console.log(respInfo.deleteusCode);
        console.log(respBody);
      }
    }),
  );
}

// 构造上传函数
function uploadFile(key, localFile) {
  const extra = new qiniu.form_up.PutExtra();
  const formUploader = new qiniu.form_up.FormUploader(config);

  formUploader.putFile(uploadToken, key, localFile, extra, (err, ret) => {
    if (!err) {
      // 上传成功， 处理返回值
      console.log(ret.hash, ret.key);
    } else {
      // 上传失败， 处理返回代码
      console.log(err);
    }
  });
}

module.exports = {
  uploadFile,
  deleteIconFile,
};
