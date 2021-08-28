import { clampLoopIndex } from '@void-aurora/math';

/**
 * The internal helper to preserve day-of-month.
 * However, if the new month does not have enough days
 * to contain the original day-of-month,
 * will use the last day of the new month.
 * @param date The `Date` instance.
 * @param month The expected month number.
 */
export function correctDayOfMonth(date: Date, month: number): void {
  if (date.getMonth() !== clampLoopIndex(month, 12)) {
    date.setDate(0); // Set to 0 day, means the last day of previous month.
  }
}
