export class MyNumber {
  value: number;

  getValue(): number {
    return this.value;
  }

  setValue(value: number) {
    return this.value = value;
  }

  toString(): string {
    return `${this.value}`;
  }
}
