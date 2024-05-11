export class Amplifier 
{
  id!: number;
  name!: string;
  manufacturer!: string;
  minResistance!: number;
  numberOfChannels!: number;
  maximumPower!: number;
  price!: number;

  constructor(init?: Partial<Amplifier>) 
  {
    Object.assign(this, init);
  }
}