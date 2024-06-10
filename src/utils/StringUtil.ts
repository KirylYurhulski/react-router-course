export class XString {
  constructor(private readonly value: string | undefined) {}

  public wordCounter(): number {
    return this.value ? this.value.split(' ').length : 0
  }
}
