'use strict';

let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};
/*
console.log(jsbook);
console.log(jsbook.title);
// オブジェクトに登録されている「価格」データのみ表示
console.log(jsbook['price']);
// stockプロパティのデータを書き換え
jsbook.stock = 10;
console.log(jsbook.stock);
// オブジェクトの全てのプロパティを読み取る
for(let p in jsbook) {
  console.log(p + '=' + jsbook[p]);
}
*/
document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;