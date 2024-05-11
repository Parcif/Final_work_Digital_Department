import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Speaker } from '../speaker.model';
import { SpeakerService } from '../speakerservice.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})

export class SpeakersComponent implements OnInit 
{
  taskForm!: FormGroup;
  tasks: Speaker[] = [];
  editing: boolean = false;
  currentTaskId: number | null = null;

  constructor(private formBuilder: FormBuilder, private taskService: SpeakerService) { }

  ngOnInit(): void 
  {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      sizeInCm: ['', Validators.required],
      nominalPower: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.taskService.getTasks().subscribe((tasks: Speaker[]) => {
      this.tasks = tasks;
    });
  }

  onSubmit(): void 
  {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      if (this.editing && this.currentTaskId !== null) {
        this.taskService.editTask(this.currentTaskId, {
          ...taskData,
          id: this.currentTaskId,
          lastModifiedAt: new Date()
        });
      } else {
        const newTask: Speaker = {
          id: Math.floor(Math.random() * 1000),
          createdAt: new Date(),
          lastModifiedAt: new Date(),
          ...taskData
        };
        this.taskService.addTask(newTask);
      }
      this.taskForm.reset();
      this.editing = false;
      this.currentTaskId = null;
    }
  }

  onEdit(task: Speaker): void 
  {
    this.editing = true;
    this.currentTaskId = task.id;
    this.taskForm.patchValue(task);
  }

  onDelete(taskId: number): void 
  {
    this.taskService.deleteTask(taskId);
  }

}