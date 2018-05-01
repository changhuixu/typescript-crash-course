export class Matrix {
  constructor(private readonly matrix: number[][]) {}

  sum(): number {
    var sum = 0;
    for (var i = 0; i < this.matrix.length; i++) {
      var currentRow = this.matrix[i];
      for (var i = 0; i < currentRow.length; i++) {
        sum += currentRow[i];
      }
    }
    return sum;
  }

  toString(): string {
    return `[${this.matrix.map(row => `[${row.join(', ')}]`).join(', ')}]`;
  }
}
