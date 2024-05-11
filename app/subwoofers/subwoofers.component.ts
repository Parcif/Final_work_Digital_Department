import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subwoofer } from '../subwoofer.model';
import { SubwooferService } from '../subwooferservice.service';

@Component({
  selector: 'app-subwoofers',
  templateUrl: './subwoofers.component.html',
  styleUrls: ['./subwoofers.component.css']
})

export class SubwoofersComponent implements OnInit 
{
  subwooferForm!: FormGroup;
  subwoofers: Subwoofer[] = [];
  editing: boolean = false;
  currentSubwooferId: number | null = null;

  constructor(private formBuilder: FormBuilder, private subwooferService: SubwooferService) { }

  ngOnInit(): void 
  {
    this.subwooferForm = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      resistance: ['', Validators.required],
      nominalPower: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.subwooferService.getSubwoofers().subscribe((subwoofers: Subwoofer[]) => {
      this.subwoofers = subwoofers;
    });
  }

  onSubmit(): void {
    if (this.subwooferForm.valid) {
      const subwooferData = this.subwooferForm.value;
      if (this.editing && this.currentSubwooferId !== null) {
        this.subwooferService.editSubwoofer(this.currentSubwooferId, {
          ...subwooferData,
          id: this.currentSubwooferId,
          lastModifiedAt: new Date()
        });
      } else {
        const newSubwoofer: Subwoofer = {
          id: Math.floor(Math.random() * 1000),
          createdAt: new Date(),
          lastModifiedAt: new Date(),
          ...subwooferData
        };
        this.subwooferService.addSubwoofer(newSubwoofer);
      }
      this.subwooferForm.reset();
      this.editing = false;
      this.currentSubwooferId = null;
    }
  }

  onEdit(subwoofer: Subwoofer): void 
  {
    this.editing = true;
    this.currentSubwooferId = subwoofer.id;
    this.subwooferForm.patchValue(subwoofer);
  }

  onDelete(subwooferId: number): void 
  {
    this.subwooferService.deleteSubwoofer(subwooferId);
  }

}
