export const cascaderData = [
  {
    text: '江苏',
    value: '1',
    children: [
      {
        text: '苏州',
        value: '1-1',
        children: [
          { text: '姑苏区', value: '1-1-1' },
          { text: '吴中区', value: '1-1-2' },
        ],
      },
      {
        text: '扬州',
        value: '1-2',
        children: [
          { text: '广陵区', value: '1-2-1' },
          { text: '邗江区', value: '1-2-2' },
        ],
      },
    ],
  },
  {
    text: '浙江',
    value: '2',
    children: [
      {
        text: '杭州',
        value: '2-1',
        children: [
          { text: '西湖区', value: '2-1-1' },
          { text: '余杭区', value: '2-1-2' },
        ],
      },
      {
        text: '温州',
        value: '2-2',
        children: [
          { text: '鹿城区', value: '2-2-1' },
          { text: '瓯海区', value: '2-2-2' },
        ],
      },
    ],
  },
]

export const fieldNamesData = [
  {
    cityName: '浙江',
    cities: [
      {
        cityName: '杭州',
        cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
      },
      {
        cityName: '温州',
        cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
      },
    ],
  },
  {
    cityName: '福建',
    cities: [
      {
        cityName: '福州',
        cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
      },
      {
        cityName: '厦门',
        cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
      },
    ],
  },
]
