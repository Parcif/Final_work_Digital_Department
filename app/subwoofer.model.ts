export class Subwoofer 
{
  id!: number;
  name!: string;
  manufacturer!: string;
  resistance!: string;
  nominalPower!: number;
  price!: number;

  constructor(init?: Partial<Subwoofer>) 
  {
    Object.assign(this, init);
  }
}