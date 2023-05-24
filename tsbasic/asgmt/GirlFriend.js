"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GirlFriend = /** @class */ (function () {
    /**
     * コンストラクタ
     *
     * @param name 名前。
     * @param birthYear 誕生年。
     * @param birthMonth 誕生月。
     * @param birthDay 誕生日。
     */
    function GirlFriend(name, birthYear, birthMonth, birthDay) {
        this._name = name;
        this._birthYear = birthYear;
        this._birthMonth = birthMonth;
        this._birthDay = birthDay;
    }
    /**
    * 引数で渡された月が誕生月かどうかを判定するメソッド。
    *
    * @param int $month 判定に使われる月。
    * @return boolean 誕生月の場合はtrue、そうでない場合はfalse。
    */
    GirlFriend.prototype.isBirthMonth = function (month) {
        if (month == this._birthMonth) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
    * 引数で渡された年に何歳になるかを計算するメソッド。
    *
    * @param int $year 計算の基となる年。
    * @return int 年齢。
    */
    GirlFriend.prototype.getAge = function (year) {
        return year - this._birthYear;
    };
    /**
    * 名前プロパティのゲッタ
    *
    * @return string 名前。
    */
    GirlFriend.prototype.getName = function () {
        return this._name;
    };
    /**
    * 誕生年プロパティのゲッタ。
    *
    * @return int 誕生年。
    */
    GirlFriend.prototype.getBirthYear = function () {
        return this._birthYear;
    };
    /**
    * 誕生月プロパティのゲッタ。
    *
    * @return int 誕生月。
    */
    GirlFriend.prototype.getBirthMonth = function () {
        return this._birthMonth;
    };
    /**
    * 誕生日プロパティのゲッタ。
    *
    * @return int 誕生日。
    */
    GirlFriend.prototype.getBirthDay = function () {
        return this._birthDay;
    };
    return GirlFriend;
}());
exports.default = GirlFriend;
