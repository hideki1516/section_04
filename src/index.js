// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };

// val4.name = "jake";
// val4.addres = "hirosima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// // 分割代入 指定した値を抜き出して名前を設定しておける
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// // 配列は0から順番に値を抜き出す
// const [name, age] = myProfile;
// const message4 = `配列：名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

// const menu = {
//   main: "カレー",
//   salad: "シーザーサラダ",
//   drink: ["コーヒー", "紅茶"]
// };

// const {
//   main,
//   salad,
//   drink: [drink1, drink2]
// } = menu;
// const message = `今日のメインは${main}、サラダは${salad}、ドリンクは${drink1}と${drink2}から選べます。`;
// console.log(message);

// const menu2 = [
//   { main1: "カレー", main2: "うどん" },
//   { salad1: "シーザーサラダ", salad2: "和風サラダ" },
//   { drink1: "コーヒー", drink2: "緑茶" }
// ];

// const [{ main1, main2 }, { salad1, salad2 }, { drink1, drink2 }] = menu2;

// const message2 = `本日のメニューは、
// メインを${main1}と${main2}、
// サラダを${salad1}と${salad2}、
// お飲み物を${drink1}と${drink2}からお選びいただけます。
// `;

// console.log(message2);

/**
 * デフォルト値 関数の引数に初期値を設定できる
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

// const orderMenu = (order = "水") => console.log(`ご注文は${order}です`);
// orderMenu("カレー");

/**
 * スプレッド構文
 */

// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1); // [1, 2]
// // console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); // 配列内を順番に処理している

// 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(arr3); // [3, 4, 5]

// 配列のコピー、結合
const arr3 = [10, 20];
const arr4 = [30, 40];

const arr5 = [...arr4];
arr5[0] = 100;
console.log(arr5); // [100, 40]
console.log(arr4); // [30, 40]

// const arr6 = [...arr3, ...arr4];
// console.log(arr6); // [10, 20, 30, 40]

// const arr7 = arr3; // 参照が引き継がれてしまう
// console.log(arr7);

// arr7[0] = 100;
// console.log(arr3); // [100, 20] 元の配列が影響を受ける
