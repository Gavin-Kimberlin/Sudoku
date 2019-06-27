import { Sudoku } from './sudoku-logic.js';
//require('exports-loader?file!./bootstrap/js/dist/.js')
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//$(document).ready(function() {

//});
// col1Arr.forEach(function (col1) {
//   col1Arr.push(col1);
//   console.log(col1Arr);
// });

// import { Row } from './sudoku-logic.js';
// import './styles.css';
$(document).ready(function () {
  $('.userInput').submit(function (event) {
    event.preventDefault();
    console.log('working');
    var col1Arr = [];
    var array1 = $('input.col1').each(function (i) {
      col1Arr[i] = $(this).val();
    });
    var col2Arr = [];
    var array2 = $('input.col2').each(function (i) {
      col2Arr[i] = $(this).val();
    });
    var col3Arr = [];
    var array3 = $('input.col3').each(function (i) {
      col3Arr[i] = $(this).val();
    });
    var col4Arr = [];
    var array4 = $('input.col4').each(function (i) {
      col4Arr[i] = $(this).val();
    });
    var col5Arr = [];
    var array5 = $('input.col5').each(function (i) {
      col5Arr[i] = $(this).val();
    });
    var col6Arr = [];
    var array6 = $('input.col6').each(function (i) {
      col6Arr[i] = $(this).val();
    });
    var col7Arr = [];
    var array7 = $('input.col7').each(function (i) {
      col7Arr[i] = $(this).val();
    });
    var col8Arr = [];
    var array8 = $('input.col8').each(function (i) {
      col8Arr[i] = $(this).val();
    });
    var col9Arr = [];
    var array9 = $('input.col9').each(function (i) {
      col9Arr[i] = $(this).val();
    });

    console.log(col1Arr, col2Arr, col3Arr, col4Arr, col5Arr, col6Arr, col7Arr, col8Arr, col9Arr);
    var row1 = [];

    // .getRow();

    // function () {
    //   col[i].for(i = 0, i < 9, i++) {
    //     if(i) {
    //       row1.push(array?[i])
    //     }
    //     console.log(row1);
    //
    // }
    // });


    // let col2 = $('.column2').val();
    // let col3 = $('.column3').val();
    // let col4 = $('.column4').val();
    // let col5 = $('.column5').val();
    // let col6 = $('.column6').val();
    // let col7 = $('.column7').val();
    // let col8 = $('.column8').val();
    // let col9 = $('.column9').val();
  });
});
