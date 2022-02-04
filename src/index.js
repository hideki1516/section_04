// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じゃけぇ",
  age: 28
};

val4.name = "jake";
val4.addres = "hirosima";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

const name = "じゃけぇ";
const age = 28;
const message1 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message1);

/**
 *  アロー関数
 */

// 従来の関数
function func1(str) {
  return str;
}

const func1 = function (str) {
  return str;
};

console.log(func1("func 1です"));

// アロー関数
const func2 = (str) => str;
// retunが1行の場合は{}省略可

console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
