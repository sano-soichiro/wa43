/**
 * WA43&44 サンプル1 TypeScript言語基礎 Ex2
 *
 * 実行ファイル。
 *
 * @author Shinzo SAITO
 */

import {CalcCircleAndBall} from "./CalcCircleAndBall";

const rList: number[] = [1, 3, 5, 7, 9];
for(const radius of rList) {
  const calc = new CalcCircleAndBall(radius);
  console.log(`■■■■ 半径${calc.radius}の計算結果`);
  let str = `円周: ${calc.getCircle()}`;
  str += ` | 円面積: ${calc.getArea()}`;
  str += ` | 球面積: ${calc.getSurface()}`;
  str += ` | 球体積: ${calc.getVolume()}`;
  console.log(str);
}