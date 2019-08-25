import {generateDates} from './util';

test("should generate 10 dates", () => {
  const dates = generateDates(new Date(), 10)
  expect(dates.length).toBe(10);
});