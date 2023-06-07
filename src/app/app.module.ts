import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TButtonComponent } from './components/t-button/t-button.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { AccordionComponent } from './components/accordion/accordion.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BoardComponent } from './pages/board/board.component';
import {DialogModule} from '@angular/cdk/dialog';
import { TaskModalComponent } from './components/task-modal/task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TButtonComponent,
    BoardsComponent,
    NavbarComponent,
    AccordionComponent,
    BoardComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
