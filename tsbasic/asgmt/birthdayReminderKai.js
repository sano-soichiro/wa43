"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GirlFriend_1 = require("./GirlFriend");
var girlFriends = [
    new GirlFriend_1.default("まゆみ", 1999, 1, 5),
    new GirlFriend_1.default("ちさこ", 2004, 5, 15),
    new GirlFriend_1.default("まい", 1997, 5, 25),
    new GirlFriend_1.default("なみ", 2000, 8, 3),
    new GirlFriend_1.default("えり", 2002, 11, 19),
    new GirlFriend_1.default("りえ", 1998, 12, 23)
];
var flg = true;
for (var i = 0; i <= 12; i++) {
    flg = true;
    console.log("■■■■" + (i) + "月です。");
    for (var _i = 0, girlFriends_1 = girlFriends; _i < girlFriends_1.length; _i++) {
        var girlFriend = girlFriends_1[_i];
        if (girlFriend.isBirthMonth(i)) {
            console.log(girlFriend.getName() + "ちゃんが" + girlFriend.getBirthDay() + "日に誕生日です。" + girlFriend.getAge(2023) + "歳になります。メッセージを送りましょう！");
            flg = false;
        }
    }
    if (flg) {
        console.log("誕生日を迎える女性はいません。安心してください。");
    }
}
