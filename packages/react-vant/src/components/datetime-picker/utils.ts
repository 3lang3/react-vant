/* eslint-disable no-plusplus */
import { isNaN } from '../utils/validate/number'

export function times(
  n: number,
  iteratee: (index: number) => string
): unknown[] {
  let index = -1
  const result = Array(n)

  while (++index < n) {
    result[index] = iteratee(index)
  }

  return result
}

export function getTrueValue(value: string | undefined): string | number {
  if (!value) {
    return 0
  }

  while (isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1)
    } else {
      return 0
    }
  }

  return parseInt(value, 10)
}

export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate()
}

export function addDays(date: Date, days: number): Date {
  date = new Date(date.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

export function getDayNumber(date: Date): number {
  const newDate = new Date(date.getTime() + 8 * 60 * 60 * 1000)
  return newDate.getTime() - (newDate.getTime() % (24 * 60 * 60 * 1000))
}
