import { isNumber } from '@void-aurora/utils';
import { trunc } from '@void-aurora/math';

import { correctDayOfMonth } from '../_helpers';

export interface BuildDateTimeValues {}

export function buildDateTime(): Date {
  const result = new Date();
  return result;
}

/**
 * Object contains numeric values of
 * year, month, date (day of month), hours, minutes, seconds, milliseconds.
 */
export interface DateTimeValues {
  /**
   * The full year number.
   */
  year: number;

  /**
   * The month number.
   */
  month: number;

  /**
   * The day number of the month.
   */
  date: number;

  /**
   * The hours number.
   */
  hours: number;

  /**
   * The minutes number.
   */
  minutes: number;

  /**
   * The seconds number.
   */
  seconds: number;

  /**
   * The milliseconds number.
   */
  milliseconds: number;
}

/**
 * Gets an object that contains date time values from a `Date` instance.
 * @param date The `Date` instance.
 */
export function getDateTime(date: Date): DateTimeValues {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
  };
}

/**
 * Returns a new instance that is copy of the given date
 * and changed by specified date time values in an object.
 *
 * The method will preserve day-of-month.
 * However, if the new month does not have enough days
 * to contain the original day-of-month,
 * will use the last day of the new month.
 *
 * @param date The origin `Date` instance.
 * @param values The object contains values.
 */
export function setDateTime(date: Date, values: Partial<DateTimeValues>): Date {
  const result = new Date(date);

  const year = trunc(values.year as number),
    month = trunc(values.month as number),
    dayOfMonth = trunc(values.date as number),
    hours = trunc(values.hours as number),
    minutes = trunc(values.minutes as number),
    seconds = trunc(values.seconds as number),
    milliseconds = trunc(values.milliseconds as number);

  if (isNumber(year)) {
    result.setFullYear(trunc(year));
    correctDayOfMonth(result, date.getMonth());
  }
  if (isNumber(month)) {
    result.setMonth(month);
    correctDayOfMonth(result, month);
  }
  result.setDate(dayOfMonth);
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setSeconds(seconds);
  result.setMilliseconds(milliseconds);

  return result;
}

/**
 * Object contains numeric values to offset
 * year, month, date (day of month), hours, minutes, seconds, milliseconds.
 */
export interface DateTimeOffsets {
  /**
   * Amount of years to offset.
   */
  years?: number;

  /**
   * Amount of months to offset.
   */
  months?: number;

  /**
   * Amount of days to offset.
   */
  days?: number;

  /**
   * Amount of hours to offset.
   */
  hours: number;

  /**
   * Amount of minutes to offset.
   */
  minutes: number;

  /**
   * Amount of seconds to offset.
   */
  seconds: number;

  /**
   * Amount of milliseconds to offset.
   */
  milliseconds: number;
}

/**
 * Returns a new instance that is copy of the given date
 * and changed by specified date time offset values in an object.
 *
 * Negative values will change the date to an earlier date
 * Positive values will change the date to an later date.
 *
 * The method will preserve day-of-month.
 * However, if the new month does not have enough days
 * to contain the original day-of-month,
 * will use the last day of the new month.
 *
 * @param date The origin `Date` instance.
 * @param offsets The offset values.
 */
export function offsetDateTime(date: Date, offsets: DateTimeOffsets): Date {
  const result = new Date(date);

  const years = trunc(offsets.years as number),
    months = trunc(offsets.months as number),
    days = trunc(offsets.days as number),
    hours = trunc(offsets.hours as number),
    minutes = trunc(offsets.minutes as number),
    seconds = trunc(offsets.seconds as number),
    milliseconds = trunc(offsets.milliseconds as number);

  if (isNumber(years)) {
    result.setFullYear(result.getFullYear() + years);
    correctDayOfMonth(result, date.getMonth());
  }
  if (isNumber(months)) {
    const newMonth = result.getMonth() + months;
    result.setMonth(newMonth);
    correctDayOfMonth(result, newMonth);
  }
  isNumber(days) && result.setDate(result.getDate() + days);
  isNumber(hours) && result.setHours(result.getHours() + hours);
  isNumber(minutes) && result.setMinutes(result.getMinutes() + minutes);
  isNumber(seconds) && result.setSeconds(result.getSeconds() + seconds);
  isNumber(milliseconds) &&
    result.setMilliseconds(result.getMilliseconds() + milliseconds);

  return result;
}

/**
 * Compare two dates and returns a numeric value in millisecond.
 * This method is usually used to sort in ascending order.
 *
 * @param dateLeft The first date to compare.
 * @param dateRight The second date to compare.
 * @returns
 * - 0, if the dates are equal.
 * - Negative value, if the left is earlier than the right.
 * - Positive value, if the left is later than the right.
 */
export function compareDateTimeAsc(dateLeft: Date, dateRight: Date): number {
  return dateLeft.getTime() - dateRight.getTime();
}

/**
 * Compare two dates and returns a numeric value in milliseconds.
 * This method is usually used to sort in descending order.
 *
 * @param dateLeft The first date to compare.
 * @param dateRight The second date to compare.
 * @returns
 * - 0, if the dates are equal.
 * - Negative value, if the left is later than the right.
 * - Positive value, if the left is earlier than the right.
 */
export function compareDateTimeDesc(dateLeft: Date, dateRight: Date): number {
  return compareDateTimeAsc(dateRight, dateLeft);
}
