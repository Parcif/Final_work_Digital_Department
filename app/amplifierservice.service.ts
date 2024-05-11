import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Amplifier } from './amplifier.model';

@Injectable({
  providedIn: 'root'
})

export class AmplifierService 
{
  private amplifiers: Amplifier[] = this.loadAmplifiers();
  private amplifiersSubject: BehaviorSubject<Amplifier[]> = new BehaviorSubject<Amplifier[]>(this.amplifiers);

  constructor() { }

  addAmplifier(amplifier: Amplifier): void 
  {
    this.amplifiers.push(amplifier);
    this.updateAmplifiers();
  }

  editAmplifier(id: number, updatedAmplifier: Amplifier): void 
  {
    const index = this.amplifiers.findIndex(a => a.id === id);
    if (index !== -1) {
      this.amplifiers[index] = updatedAmplifier;
      this.updateAmplifiers();
    }
  }

  deleteAmplifier(id: number): void 
  {
    this.amplifiers = this.amplifiers.filter(a => a.id !== id);
    this.updateAmplifiers();
  }

  getAmplifiers(): Observable<Amplifier[]> 
  {
    return this.amplifiersSubject.asObservable();
  }

  private saveAmplifiers(): void 
  {
    localStorage.setItem('amplifiers', JSON.stringify(this.amplifiers));
  }

  private loadAmplifiers(): Amplifier[] 
  {
    const savedAmplifiers = localStorage.getItem('amplifiers');
    return savedAmplifiers ? JSON.parse(savedAmplifiers) : [];
  }

  private updateAmplifiers(): void 
  {
    this.saveAmplifiers();
    this.amplifiersSubject.next(this.amplifiers);
  }

}