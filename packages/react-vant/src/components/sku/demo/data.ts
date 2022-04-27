export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '测试商品',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '颜色',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '粉色',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '黄色',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '蓝色',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '尺寸',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '大',
            },
            {
              id: '2',
              name: '小',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '加料',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '布丁',
            price: 3,
          },
          {
            id: 1225,
            name: '波霸',
            price: 4,
          },
          {
            id: 1226,
            name: '珍珠',
            price: 5,
          },
        ],
      },
      {
        k: '非必选属性',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '属性1',
            price: 3,
          },
          {
            id: 1235,
            name: '属性2',
            price: 4,
          },
        ],
      },
      {
        k: '未加价的属性项',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '属性a',
            price: 0,
          },
          {
            id: 1245,
            name: '属性b',
            price: 0,
          },
        ],
      },
    ],
  };
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
};
