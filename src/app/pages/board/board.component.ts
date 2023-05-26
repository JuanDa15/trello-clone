import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from 'src/app/interface/task.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
  `]
})
export class BoardComponent {
  public tasks: Task[] = [
    {
      id: 1,
      description: 'Task 1'
    },
    {
      id: 2,
      description: 'Task 2'
    },    {
      id: 3,
      description: 'Task 3'
    },
    {
      id: 4,
      description: 'Task 4'
    }
  ];
  public inProgressTask: Task[] = [
    {
      id: 1,
      description: 'Task 1'
    },
    {
      id: 2,
      description: 'Task 2'
    },    {
      id: 3,
      description: 'Task 3'
    },
    {
      id: 4,
      description: 'Task 4'
    }
  ];
  public doneTask: Task[] = [
    {
      id: 1,
      description: 'Task 1'
    },
    {
      id: 2,
      description: 'Task 2'
    },    {
      id: 3,
      description: 'Task 3'
    },
    {
      id: 4,
      description: 'Task 4'
    }
  ];

  public droppedItem(event: CdkDragDrop<Task[]>, array: Task[]) {
    moveItemInArray(array, event.currentIndex, event.previousIndex)
  }
}
