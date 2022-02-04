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
const myProfile = {
  name: "じゃけぇ",
  age: 28
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
console.log(message1);

// // 分割代入 指定した値を抜き出して名前を設定しておける
const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です`;
console.log(message2);

// const myProfile = ["じゃけぇ", 28];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
console.log(message3);

// // 配列は0から順番に値を抜き出す
const [name, age] = myProfile;
const message4 = `配列：名前は${name}です。年齢は${age}歳です`;
console.log(message4);

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
