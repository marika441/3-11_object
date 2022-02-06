'use strict';

let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};
console.log(jsbook);
console.log(jsbook.title);
// オブジェクトに登録されている「価格」データのみ表示
console.log(jsbook['price']);
// stockプロパティのデータを書き換え
jsbook.stock = 10;
console.log(jsbook.stock);