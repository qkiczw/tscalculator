export class Exchanger {
  private gold: number;
  private silver: number;
  private copper: number;

  constructor(gold: number, silver: number, copper: number) {
    this.gold = gold;
    this.silver = silver;
    this.copper = copper;
  }

  //   Every gold coin is worth 20 silver coins
  //   Every silver coin is worth 12 cooper coins
  public allCoinsToCopper(): number {
    const goldToCopper = this.gold * 20 * 12;
    const silverToCopper = this.silver * 12;

    return goldToCopper + silverToCopper + this.copper;
  }
}
