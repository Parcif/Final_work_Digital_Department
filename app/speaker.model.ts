export class Speaker 
{
  id!: number;
  name!: string;
  manufacturer!: string;
  sizeInCm!: number;
  nominalPower!: number;
  price!: number;

  constructor(init?: Partial<Speaker>) 
  {
    Object.assign(this, init);
  }
}