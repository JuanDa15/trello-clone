import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { setTheme, toggleTheme } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'trello-clone';

  ngAfterViewInit(): void {
    setTheme('dark');
  }

}
