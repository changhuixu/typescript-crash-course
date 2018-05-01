export class Matrix {
  constructor(private readonly matrix: number[][]) {}

  sum(): number {
    let sum = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(`row ${i}`);
      let currentRow = this.matrix[i];
      for (let i = 0; i < currentRow.length; i++) {
        sum += currentRow[i];
        console.log(`     col ${i}`);
      }
      console.log(`row ${i}`);
    }
    return sum;
  }

  toString(): string {
    return `[${this.matrix.map(row => `[${row.join(', ')}]`).join(', ')}]`;
  }

  sum2(): number {
    return this.matrix
      .map(row => row.reduce((a, b) => a + b, 0))
      .reduce((a, b) => a + b, 0);
  }

  count(): number {
    return this.matrix.map(row => row.length).reduce((a, b) => a + b, 0);
  }
}
