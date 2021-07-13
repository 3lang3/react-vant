// 添加元素包裹每个区域
module.exports = function cardWrapper(html) {
  const group = html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::');

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="card">${fragment}</div>`;
      }

      return fragment;
    })
    .join('');
};
