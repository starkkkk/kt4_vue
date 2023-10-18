const data = [
  {
    id: "1",
    parentId: "0",
    name: "YQ事件",
    title: "YQ事件",
    text: "YQ事件",
    value: "1",
    rank: 1,
    children: [
      {
        id: "01",
        parentId: "1",
        name: "政治类",
        title: "政治类",
        text: "政治类",
        value: "01",
        rank: 2,
        children: [
          {
            id: "001",
            parentId: "01",
            name: "香港非法占中事件",
            title: "香港非法占中事件",
            text: "香港非法占中事件",
            value: "001",
            rank: 3,
          },
        ],
      },
      {
        id: "02",
        parentId: "1",
        name: "经济类",
        title: "经济类",
        text: "经济类",
        value: "02",
        rank: 2,
        children: [
          {
            id: "002",
            parentId: "02",
            name: "瑞幸咖啡造假退市",
            title: "瑞幸咖啡造假退市",
            text: "瑞幸咖啡造假退市",
            value: "002",
            rank: 3,
          },
        ],
      },
      {
        id: "03",
        parentId: "1",
        name: "社会类",
        title: "社会类",
        text: "社会类",
        value: "03",
        rank: 2,
        children: [
          {
            id: "003",
            parentId: "03",
            name: "李文亮事件",
            title: "李文亮事件",
            text: "李文亮事件",
            value: "003",
            rank: 3,
          },
        ],
      },
    ],

  },
];
module.exports = [
  {
    url: "/tree/list",
    type: "post",
    response() {
      return { code: 200, msg: "success", data };
    },
  },
];
