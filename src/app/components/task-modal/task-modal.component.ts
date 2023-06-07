import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { Task } from 'src/app/interface/task.interface';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styles: [
  ]
})
export class TaskModalComponent {
  public dialogRef = inject(DialogRef);
  public data: Task = inject(DIALOG_DATA);

}
