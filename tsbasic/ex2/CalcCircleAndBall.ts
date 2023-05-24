/**
 * WA43&44 サンプル1 TypeScript言語基礎 Ex2
 *
 * 円球計算クラス。
 *
 * @author Shinzo SAITO
 */

export class CalcCircleAndBall {
    /**
     * 半径を表すプロパティ。
     */
    private _radius: number = 0;

   /**
    * 円周率を表す定数プロパティ。
    */
   private readonly pi: number = 3.14;
    
   /**
    * コンストラクタ。
    * @param radius 半径
    */
   constructor(radius: number) {
       this._radius = radius;
   }
   
   /**
    * 円周を得るメソッド。
    * @return 計算された円周。
    */
   getCircle(): number {
       const circle = 2 * this.pi * this._radius;
       return circle;
   }
   
   /**
    * 円の面積を得るメソッド。
    * @return 計算された円の面積。
    */
   getArea(): number {
       const area = this.pi * this._radius * this._radius;
       return area;
   }
   
   /**
    * 球の表面積を得るメソッド。
    *
    * @return 計算された球の表面積。
    */
   getSurface(): number {
       const surface = 4 * this.pi * this._radius * this._radius;
       return surface;
   }
   
   /**
    * 球の体積を得るメソッド。
    *
    * @return 計算された球の体積。
    */
   getVolume(): number {
       const volume = 4 * this.pi * this._radius * this._radius * this._radius / 3;
       return volume;
   }

   /**
    * 半径のゲッタ。
    */
    get radius(): number {
       return this._radius;
   }
}