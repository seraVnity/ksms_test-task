export function generateDates(startDate, number) {
  const arrayOfDates = [];
  for (let i = 0; i < 10; i++) {
    let date = new Date();
    date.setDate(startDate.getDate() + i);
    arrayOfDates.push(date);
  }
  return arrayOfDates;
}