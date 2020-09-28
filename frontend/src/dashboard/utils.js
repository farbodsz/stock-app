/**
 * Formats the given number as currency / balance.
 *
 * @param {number} balance the number of cents
 * @param {boolean} spaced true if there should be spaces between symbols
 *                         (default: true)
 * @returns {string} the formatted balance
 */
export function formatBalance(balance, spaced = true) {
  const bstr = balance.toString();
  const n = bstr.length;

  const sp = spaced ? " " : "";

  var formatted = "." + sp + bstr[n - 2] + bstr[n - 1];

  const dollars = bstr.slice(0, n - 2);
  if (dollars.length <= 4) {
    return "$" + sp + dollars + sp + formatted;
  }

  // Space out groups of 3
  for (var i = dollars.length - 1; i >= 0; i -= 3) {
    formatted = dollars.slice(i - 2, i + 1) + " " + formatted;
  }
  return "$" + sp + dollars.slice(0, dollars.length % 3) + sp + formatted;
}
