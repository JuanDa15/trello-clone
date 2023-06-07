import { Dialog } from '@angular/cdk/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { TaskModalComponent } from 'src/app/components/task-modal/task-modal.component';
import { Column } from 'src/app/interface/column.interface';
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
  public dialogBuilder = inject(Dialog);
  public columns: Column[] = [
    {
      id: 1,
      columnName: 'Task',
      tasks: [
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
      ]
    },
    {
      id: 1,
      columnName: 'In progress',
      tasks: [
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
      ]
    },
    {
      id: 1,
      columnName: 'Done',
      tasks: [
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
      ]
    }
  ];


  public droppedItem(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.currentIndex, event.previousIndex)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  public droppedItemColumn(event: CdkDragDrop<Column[]>) {
    console.log(event)
    moveItemInArray(event.container.data, event.currentIndex, event.previousIndex)
  }

  public addColumn() {
    this.columns.push({
      id: 4,
      columnName: 'QA',
      tasks: []
    })
  }

  public openTask( task: Task ) {
    const ref = this.dialogBuilder.open(TaskModalComponent, {
      maxWidth: '50%',
      minWidth: '400px',
      data: task
    })

    ref.closed.subscribe({
      next: (val) => {
        console.log(val)
      }
    })
  }
}
