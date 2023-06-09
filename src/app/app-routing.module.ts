import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'LOG-IN'
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: 'boards',
    children: [
      {
        path: '',
        component: BoardsComponent,
        title: 'boards'
      },
      {
        path: 'board',
        component: BoardComponent,
        title: 'board'
      },

    ]
  },
  {
    path: 'scroll',
    component: ScrollComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
