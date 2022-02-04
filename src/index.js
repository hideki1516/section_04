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
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1); // 配列内を順番に処理している

// 配列をまとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [3, 4, 5]

// 配列のコピー、結合
const arr3 = [10, 20];
const arr4 = [30, 40];

const arr5 = [...arr4];
arr5[0] = 100;
console.log(arr5); // [100, 40]
console.log(arr4); // [30, 40]

const arr6 = [...arr3, ...arr4];
console.log(arr6); // [10, 20, 30, 40]

const arr7 = arr3; // 参照が引き継がれてしまう
console.log(arr7);

arr7[0] = 100;
console.log(arr3); // [100, 20] 元の配列が影響を受ける

/**
 * map filter 配列の処理
 */

// const nameArr = ["田中", "山田", "じゃけぇ"];

// これまではfor文を使用していた
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }

// map 新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// map 引数に要素が順番に処理される
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// 1つ目の引数には値、2つ目の引数にはindex

// filter 条件に一致したものだけ抽出して新しい配列を生成
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; // 条件式にあった値だけを抽出
// });
// console.log(newNumArr);

// 条件を指定してmapで新しい配列を生成
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// const nameArr = ["山本", "井上", "田中"];

// map 配列の中身を表示
// nameArr.map((name) => console.log(name));

// map 山本以外にさんをつけて新しい配列を生成
// const newNameArr = nameArr.map((name) => {
//   if (name === "山本") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);
// newNameArr.map((name) => console.log(name));

// filter 2で割り切れる数字だけ抽出して配列生成
// const numArr = [121, 2312, 42113, 420, 222];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);
// newNumArr.map((num) => console.log(num));

/**
 * 三項演算子
 */

// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString()); // 3桁区切りで,表示

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };

// console.log(checkSum(50, 40));

// 三項演算子 数字の場合は'円'をつける 文字列の場合は注意告知する
// const num = "1500";
// const formattedNum =
//   typeof num === "number" ? `${num}円` : "数字を入力してください";
// console.log(formattedNum);

// 三項演算子 配列の文字列が100以上かどうかを判定
const nums = [1, 200, 1031, 20, 11, 50, 100];
// const checkNum = nums.map((num) => {
//   return num >= 100 ? `${num}は100以上です` : `${num}は100以下です`;
// });
// console.log(checkNum);
// checkNum.map((check) => console.log(check));

const newNum = nums.filter((num) => {
  return num >= 100;
});

newNum.map((tips) => console.log(tips));

/**
 * 論理演算子の本当に意味 && || または、かつ、ではない
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||　：　　左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && : 左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

const menu = {
  main: "カレー",
  salad: "シーザーサラダ",
  drink: ["コーヒー", "紅茶"]
};

const {
  main,
  salad,
  drink: [drink1, drink2]
} = menu;
const message = `今日のメインは${main}、サラダは${salad}、ドリンクは${drink1}と${drink2}から選べます。`;
console.log(message);

const menu2 = [
  { main1: "カレー", main2: "うどん" },
  { salad1: "シーザーサラダ", salad2: "和風サラダ" },
  { drink1: "コーヒー", drink2: "緑茶" }
];

const [{ main1, main2 }, { salad1, salad2 }, { drink1, drink2 }] = menu2;

const message2 = `本日のメニューは、
メインを${main1}と${main2}、
サラダを${salad1}と${salad2}、
お飲み物を${drink1}と${drink2}からお選びいただけます。
`;

console.log(message2);
