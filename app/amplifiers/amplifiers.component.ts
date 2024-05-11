import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Amplifier } from '../amplifier.model';
import { AmplifierService } from '../amplifierservice.service';

@Component({
  selector: 'app-amplifiers',
  templateUrl: './amplifiers.component.html',
  styleUrls: ['./amplifiers.component.css']
})

export class AmplifiersComponent implements OnInit 
{
  amplifierForm!: FormGroup;
  amplifiers: Amplifier[] = [];
  editing: boolean = false;
  currentAmplifierId: number | null = null;

  constructor(private formBuilder: FormBuilder, private amplifierService: AmplifierService) { }

  ngOnInit(): void 
  {
    this.amplifierForm = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      minResistance: ['', Validators.required],
      numberOfChannels: ['', Validators.required],
      maximumPower: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.amplifierService.getAmplifiers().subscribe((amplifiers: Amplifier[]) => {
      this.amplifiers = amplifiers;
    });
  }

  onSubmit(): void 
  {
    if (this.amplifierForm.valid) {
      const amplifierData = this.amplifierForm.value;
      if (this.editing && this.currentAmplifierId !== null) {
        this.amplifierService.editAmplifier(this.currentAmplifierId, {
          ...amplifierData,
          id: this.currentAmplifierId,
          lastModifiedAt: new Date()
        });
      } else {
        const newAmplifier: Amplifier = {
          id: Math.floor(Math.random() * 1000),
          createdAt: new Date(),
          lastModifiedAt: new Date(),
          ...amplifierData
        };
        this.amplifierService.addAmplifier(newAmplifier);
      }
      this.amplifierForm.reset();
      this.editing = false;
      this.currentAmplifierId = null;
    }
  }

  onEdit(amplifier: Amplifier): void 
  {
    this.editing = true;
    this.currentAmplifierId = amplifier.id;
    this.amplifierForm.patchValue(amplifier);
  }

  onDelete(amplifierId: number): void 
  {
    this.amplifierService.deleteAmplifier(amplifierId);
  }

}