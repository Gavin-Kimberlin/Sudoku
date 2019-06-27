//require('exports-loader?file!./bootstrap/js/dist/.js')
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
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
    $('input.col1').each(function (i) {
      col1Arr[i] = $(this).val();

      //     $('.userInput').submit(function (event) {
      //       event.preventDefault();
      //       console.log('working');
      //       let col1 = $('.column1').val();
      //       console.log($('.column1').val());
      //       let col2 = $('.column2').val();
      //       let col3 = $('.column3').val();
      //       let col4 = $('.column4').val();
      //       let col5 = $('.column5').val();
      //       let col6 = $('.column6').val();
      //       let col7 = $('.column7').val();
      //       let col8 = $('.column8').val();
      //       let col9 = $('.column9').val();
      //       console.log(col1);

    });

    // col1Arr.push($('.col1').val());
    console.log(col1Arr);

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
