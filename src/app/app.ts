import { Matrix } from './matrix';

export class App {
  run(): void {
    let result = this.calculate(false, 0);
    console.log(`Result {false, 0}: ${result}`);

    result = this.calculate(true, 0);
    console.log(`Result {true, 0}: ${result}`);

    let m = new Matrix([[10,20],[10,20,30]]);
    console.log(`matrix sum of ${m.toString()} = ${m.sum()}`);
    console.log(`matrix sum of ${m.toString()} = ${m.sum2()}`);
    console.log(`matrix ${m.toString()} has ${m.count()} elements in total`);
  }

  private calculate(condition: boolean, x: number): number {
    if (condition) {
      const x = 100;
      return x;
    }
    return x;
  }
}
