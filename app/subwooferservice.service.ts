import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subwoofer } from './subwoofer.model';

@Injectable({
  providedIn: 'root'
})

export class SubwooferService 
{
  private subwoofers: Subwoofer[] = this.loadSubwoofers();
  private subwoofersSubject: BehaviorSubject<Subwoofer[]> = new BehaviorSubject<Subwoofer[]>(this.subwoofers);

  constructor() { }

  addSubwoofer(subwoofer: Subwoofer): void 
  {
    this.subwoofers.push(subwoofer);
    this.updateSubwoofers();
  }

  editSubwoofer(id: number, updatedSubwoofer: Subwoofer): void 
  {
    const index = this.subwoofers.findIndex(s => s.id === id);
    if (index !== -1) {
      this.subwoofers[index] = updatedSubwoofer;
      this.updateSubwoofers();
    }
  }

  deleteSubwoofer(id: number): void 
  {
    this.subwoofers = this.subwoofers.filter(s => s.id !== id);
    this.updateSubwoofers();
  }

  getSubwoofers(): Observable<Subwoofer[]> 
  {
    return this.subwoofersSubject.asObservable();
  }

  private saveSubwoofers(): void 
  {
    localStorage.setItem('subwoofers', JSON.stringify(this.subwoofers));
  }

  private loadSubwoofers(): Subwoofer[] 
  {
    const savedSubwoofers = localStorage.getItem('subwoofers');
    return savedSubwoofers ? JSON.parse(savedSubwoofers) : [];
  }

  private updateSubwoofers(): void 
  {
    this.saveSubwoofers();
    this.subwoofersSubject.next(this.subwoofers);
  }

}