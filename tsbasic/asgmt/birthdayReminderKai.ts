import GirlFriend from "./GirlFriend";

const girlFriends: GirlFriend[] = [
  new GirlFriend("まゆみ", 1999, 1, 5),
	new GirlFriend("ちさこ", 2004, 5, 15),
	new GirlFriend("まい", 1997, 5, 25),
	new GirlFriend("なみ", 2000, 8, 3),
	new GirlFriend("えり", 2002, 11, 19),
	new GirlFriend("りえ", 1998, 12, 23)
];

let flg: boolean = true;
for (let i = 0;i <= 12; i++) {
  flg = true;
  console.log("■■■■" + (i) + "月です。");
  for (const girlFriend of girlFriends) {
    if (girlFriend.isBirthMonth(i)) {
      console.log(girlFriend.name + "ちゃんが" + girlFriend.birthDay + "日に誕生日です。" + girlFriend.getAge(2023) + "歳になります。メッセージを送りましょう！");
      flg = false;
    }
  }
  if (flg) {
    console.log("誕生日を迎える女性はいません。安心してください。");
  }
}
