let rowOffset = 0

/**
 * Returns the current row offset and increments it by the given value.
 * @param offset The value to increment the row offset by.
 * @returns The current row offset.
 */
export const useRowOffset = (offset?: number) => {
  if (offset === undefined) {
    return rowOffset
  } else if (offset < 0) {
    rowOffset = 0
  }
  rowOffset += offset
  return rowOffset
}
