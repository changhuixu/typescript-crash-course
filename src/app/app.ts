import { Matrix } from './matrix';

export class App {
  run(): void {
    var result = this.calculate(false, 0);
    console.log(`Result {false, 0}: ${result}`);

    result = this.calculate(true, 0);
    console.log(`Result {true, 0}: ${result}`);

    // var m = new Matrix([[10,20],[10,20,30]]);
    // console.log(`matrix sum of ${m.toString()} = ${m.sum()}`);
  }

  private calculate(condition: boolean, x: number): number {
    if (condition) {
      var x = 100;
    }
    return x;
  }
}
