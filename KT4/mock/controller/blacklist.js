const data = [
  {
    name: "7",
    ID: "338248117",
    day1: 749,
    day2:386,
    day3:185,
    day4:70,
    day5:968,
    day6:1253,
    day7:776,
    day8:692,
    day9:668,
    day10:1790,
    day11:1572,
    day12:931,
    day13:1680,
    day14:1347

  },
  {
    name: "19",
    ID: "1135121659529064449",
    day1: 408,
    day2:268,
    day3:91,
    day4:259,
    day5:219,
    day6:130,
    day7:249,
    day8:293,
    day9:385,
    day10:410,
    day11:382,
    day12:1013,
    day13:162,
    day14:34

  },{
    name: "21",
    ID: "879074440616722433",
    day1: 391,
    day2:277,
    day3:346,
    day4:253,
    day5:223,
    day6:178,
    day7:128,
    day8:423,
    day9:653,
    day10:537,
    day11:315,
    day12:408,
    day13:215,
    day14:59

  },
  {
    name: "27",
    ID: "939984690269818880",
    day1: 293,
    day2:607,
    day3:457,
    day4:551,
    day5:366,
    day6:303,
    day7:747,
    day8:714,
    day9:1617,
    day10:998,
    day11:1395,
    day12:2205,
    day13:1103,
    day14:1017

  },
  {
    name: "34",
    ID: "1134566831174238208",
    day1: 270,
    day2:234,
    day3:81,
    day4:38,
    day5:54,
    day6:288,
    day7:580,
    day8:186,
    day9:272,
    day10:72,
    day11:94,
    day12:319,
    day13:198,
    day14:83

  },{
    name: "35",
    ID: "267695291",
    day1: 267,
    day2:638,
    day3:189,
    day4:559,
    day5:289,
    day6:697,
    day7:707,
    day8:200,
    day9:253,
    day10:116,
    day11:37,
    day12:137,
    day13:197,
    day14:844

  },{
    name: "36",
    ID: "1134682515099095041",
    day1: 264,
    day2:172,
    day3:187,
    day4:408,
    day5:275,
    day6:588,
    day7:1475,
    day8:1671,
    day9:249,
    day10:490,
    day11:1444,
    day12:665,
    day13:1122,
    day14:1484

  },

];
module.exports = [
  {
    url: "/blacklist/getList",
    type: "post",
    response() {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];
