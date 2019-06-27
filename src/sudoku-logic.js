export function Sudoku(row, column, box) {
  this.row = row;
  this.column = column;
  this.box = box;
};

Sudoku.prototype.getColumn = function () {
  this.column.push(col1Arr, col2Arr, col3Arr, col4Arr, col5Arr, col6Arr, col7Arr, col8Arr, col9Arr);
};

Sudoku.prototype.getRow = function () {
  for (i = 0; i <= 8; i++) {
    this.row.push(this.column[i][0]);

  };

  console.log(this.row);
};

export function Column(col) {
  col.forEach(function (array) {
    return (new Set(array)).size !== array.length;
  });
}
