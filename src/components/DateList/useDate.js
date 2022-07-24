export const createView = (year, month) => {
  console.log("initView");
  let arr = [];
  let time = new Date(year, month - 1, 1).getTime();
  const first = new Date(time);
  const firstDay = {
    year: first.getFullYear(),
    month: first.getMonth() + 1,
    date: first.getDate(),
    day: first.getDay(),
  };
  console.log(firstDay);
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
  console.log("createView", arr);
  return arr;
};
