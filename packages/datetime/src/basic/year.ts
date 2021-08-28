import { isNumber } from '@void-aurora/utils';
import { trunc } from '@void-aurora/math';

import { correctDayOfMonth } from '../_helpers';

/**
 * Gets the full year.
 */
export function getYear(date: Date): number {
  return date.getFullYear();
}

/**
 * Returns a new instance that is copy of the given date
 * and changed by the specified year.
 *
 * The method will preserve day-of-month.
 * However, if the new month does not have enough days
 * to contain the original day-of-month,
 * will use the last day of the new month.
 *
 * @param date The origin `Date` instance.
 * @param values The year of the new date.
 */
export function setYear(date: Date, year: number): Date {
  const result = new Date(date);
  const newYear = trunc(year);
  if (isNumber(newYear)) {
    result.setFullYear(newYear);
    correctDayOfMonth(result, date.getMonth());
  }
  return result;
}

/**
 * Returns a new instance that is copy of the given date
 * and changed by specified offset years.
 *
 * Negative value will change the date to an earlier date
 * Positive value will change the date to an later date.
 *
 * The method will preserve day-of-month.
 * However, if the new month does not have enough days
 * to contain the original day-of-month,
 * will use the last day of the new month.
 *
 * @param date The origin `Date` instance.
 * @param years Amount of year to offset.
 */
export function offsetYear(date: Date, years: number): Date {
  const result = new Date(date);
  const newYear = trunc(getYear(result) + years);
  if (isNumber(newYear)) {
    result.setFullYear(newYear);
    correctDayOfMonth(result, date.getMonth());
  }
  return result;
}

/**
 * Compare two dates and returns a numeric value in years.
 * This method is usually used to sort in ascending order.
 *
 * @param dateLeft The first date to compare.
 * @param dateRight The second date to compare.
 * @returns
 * - 0, if the dates are in the same year.
 * - Negative value, if the left is earlier than the right.
 * - Positive value, if the left is later than the right.
 */
export function compareYearAsc(leftDate: Date, rightDate: Date): number {
  return getYear(leftDate) - getYear(rightDate);
}

/**
 * Compare two dates and returns a numeric value in years.
 * This method is usually used to sort in descending order.
 *
 * @param dateLeft The first date to compare.
 * @param dateRight The second date to compare.
 * @returns
 * - 0, if the dates are in the same year.
 * - Negative value, if the left is later than the right.
 * - Positive value, if the left is earlier than the right.
 */
export function compareYearDesc(leftDate: Date, rightDate: Date): number {
  return compareYearAsc(rightDate, leftDate);
}
