/* eslint-disable no-plusplus */
import { padZero } from '../utils';
import { isNaN } from '../utils/validate/number';

export function times(n: number, iteratee: (index: number) => string): unknown[] {
  let index = -1;
  const result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

export function getTrueValue(value: string | undefined): string | number {
  if (!value) {
    return 0;
  }

  while (isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}

export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate();
}

export function getDaysBetweenDate(startDate: Date, stopDate: Date): string[] {
  const result = [];
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    result.push({
      text: format(currentDate),
      date: currentDate.getTime(),
    });
    currentDate = addDays(currentDate, 1);
  }
  return result;
}

export function addDays(date: Date, days: number): Date {
  date = new Date(date.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export function getDay(date: Date): string {
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  return getBesideDay(date) || week[date.getDay()];
}

export function getDayNumber(date: Date): number {
  const newDate = new Date(date.getTime() + 8 * 60 * 60 * 1000);
  return newDate.getTime() - (newDate.getTime() % (24 * 60 * 60 * 1000));
}

export function getBesideDay(date: Date): string {
  return ['今天', '明天', '后天'][
    (getDayNumber(date) - getDayNumber(new Date())) / (24 * 60 * 60 * 1000)
  ];
}

export function format(date: Date): string {
  return `${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ${getDay(date)}`;
}
