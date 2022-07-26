export const createView = (year, month) => {
  console.log("call createView");
  let arr = [];
  let time = new Date(year, month - 1, 1).getTime();
  const first = new Date(time);
  const firstDay = {
    year: first.getFullYear(),
    month: first.getMonth() + 1,
    date: first.getDate(),
    day: first.getDay(),
  };
  time = time - 60 * 60 * 24 * firstDay.day * 1000;
  for (let i = 0; i < 42; i++) {
    let date = new Date(time);
    const dateItem = {
      id: `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      day: date.getDay(),
    };
    arr = arr.concat([dateItem]);
    time = time + 60 * 60 * 24 * 1000;
  }
  return arr;
};

export const createMonthList = (year) => {
  console.log("initView");
  let monthList = [];
  for (let month = 1; month <= 12; month++) {
    let time = new Date(year, month - 1, 1).getTime();
    const first = new Date(time);
    const firstDay = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };
    // console.log("firstDay", firstDay);
    time = time - 60 * 60 * 24 * firstDay.day * 1000;
    let tmp = [];
    for (let i = 0; i < 42; i++) {
      let date = new Date(time);
      const dateItem = {
        id: `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      tmp = tmp.concat(dateItem);
      time = time + 60 * 60 * 24 * 1000;
    }
    monthList = monthList.concat([tmp]);
  }

  return monthList;
};
