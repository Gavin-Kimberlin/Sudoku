export function Row (row) {
 row.forEach(function (array) {
  return (new Set(array)).size !== array.length;
 });
}
