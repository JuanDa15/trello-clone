import { Component } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styles: [
  ]
})
export class BoardsComponent {


  public accordionList = [
    {
      header: "Juan David's workspace",
      initial: 'JD',
      items: [
        {
          label: 'Boards',
          icon: 'fa-brands fa-trello'
        },
        {
          label: 'Highlights',
          icon: 'fa-regular fa-heart'
        },
        {
          label: 'Views',
          icon: 'fa-solid fa-table-cells-large'
        },
        {
          label: 'Members',
          icon: 'fa-solid fa-plus'
        },
        {
          label: 'Settings',
          icon: 'fa-solid fa-gear'
        }
      ]
    },
    {
      header: "Daniels's Company",
      initial: 'D',
      items: [
        {
          label: 'Boards',
          icon: 'fa-brands fa-trello'
        },
        {
          label: 'Highlights',
          icon: 'fa-regular fa-heart'
        },
        {
          label: 'Views',
          icon: 'fa-solid fa-table-cells-large'
        }
      ]
    },
    {
      header: "Juliana's Workspace",
      initial: 'J',
      items: [
        {
          label: 'Boards',
          icon: 'fa-brands fa-trello'
        },
        {
          label: 'Highlights',
          icon: 'fa-regular fa-heart'
        },
        {
          label: 'Views',
          icon: 'fa-solid fa-table-cells-large'
        }
      ]
    }
  ]
}
