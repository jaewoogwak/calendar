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

export const createMonthList = (year, mm) => {
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

export function utilityFunction(dateId) {
  const year = dateId.slice(0, 4);
  // 2022 10~12 10~31
  if (dateId.length === 8) {
    const month = dateId.slice(4, 6);
    const date = dateId.slice(6, 8);
    return `${year}-${month}-${date}`;
  } else if (dateId.length === 7) {
    // 2022 10~12 1~9
    if (
      dateId.slice(4, 6) === "10" ||
      dateId.slice(4, 6) === "11" ||
      dateId.slice(4, 6) === "12"
    ) {
      const month = dateId.slice(4, 6);
      const date = dateId.slice(6);
      return `${year}-${month}-${date}`;
    } else {
      // 2022 1~9 10~31
      const month = dateId.slice(4, 5);
      const date = dateId.slice(5);
      return `${year}-${month}-${date}`;
    }
  } else {
    // 2022 1~9 1~9
    const month = dateId.slice(4, 5);
    const date = dateId.slice(5);
    return `${year}-${month}-${date}`;
  }
}
