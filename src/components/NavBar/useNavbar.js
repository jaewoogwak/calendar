export const createPreviousPage = (year, month) => {
  let arr = [];
  console.log(year, month - 1);
  let time = new Date(year, month - 2, 1).getTime();
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
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      day: date.getDay(),
    };
    arr = arr.concat([dateItem]);
    time = time + 60 * 60 * 24 * 1000;
  }
  console.log("arr in createPrevious page", arr);
  return arr;
};

export const createNextPage = (year, month) => {
  let arr = [];
  let time = new Date(year, month, 1).getTime();
  const first = new Date(time);
  const firstDay = {
    year: first.getFullYear(),
    month: first.getMonth() + 1,
    date: first.getDate(),
    day: first.getDay(),
  };

  time = time - 60 * 60 * 24 * firstDay.day * 1000;
  for (let i = 0; i < 42; i++) {
    const date = new Date(time);
    const dateItem = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      day: date.getDay(),
    };
    arr = arr.concat([dateItem]);
    time = time + 60 * 60 * 24 * 1000;
  }
  console.log("arr in createNext page", arr);
  return arr;
};
