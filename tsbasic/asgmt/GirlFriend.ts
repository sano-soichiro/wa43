export default class GirlFriend {
  /**
   * 名前を表すフィールド。
   */
  private _name:string;

  /**
   * @var int 誕生年を表すフィールド。
   */
  private _birthYear:number;

  /**
   * @var int 誕生月を表すフィールド。
   */
  private _birthMonth:number;

  /**
   * @var int 誕生日を表すフィールド。
   */
  private _birthDay:number;

  /**
   * コンストラクタ
   * 
   * @param name 名前。
   * @param birthYear 誕生年。
   * @param birthMonth 誕生月。
   * @param birthDay 誕生日。
   */
  constructor(name:string, birthYear:number, birthMonth:number, birthDay:number) {
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
  public isBirthMonth(month:number): boolean {
    if(month == this._birthMonth) {
      return true;
    }
    else {
        return false;
    }
  }

  /**
  * 引数で渡された年に何歳になるかを計算するメソッド。
  *
  * @param int $year 計算の基となる年。
  * @return int 年齢。
  */
  public getAge(year:number): number {
    return year - this._birthYear;
  }

  /**
  * 名前プロパティのゲッタ
  *
  * @return string 名前。
  */
  get name(): string {
    return this._name;
  }

  /**
  * 誕生年プロパティのゲッタ。
  *
  * @return int 誕生年。
  */
  get birthYear():number {
    return this._birthYear;
  }

  /**
  * 誕生月プロパティのゲッタ。
  *
  * @return int 誕生月。
  */
  get birthMonth(): number {
    return this._birthMonth;
  }

  /**
  * 誕生日プロパティのゲッタ。
  *
  * @return int 誕生日。
  */
  get birthDay(): number {
    return this._birthDay;
  }
}
