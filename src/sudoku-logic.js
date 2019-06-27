export function Sudoku(row, column, box) {
  this.row = row,
  this.column = column,
  this.box = box
};



export function Column (col) {
  col.forEach(function (array) {
    return (new Set(array)).size !== array.length;
  });
}
