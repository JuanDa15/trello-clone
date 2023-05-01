import { Component } from '@angular/core';
import { toggleTheme } from 'src/app/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  public isOpen: boolean;
  public isOpen2: boolean;
  public isOpen3: boolean;

  constructor(){
    this.isOpen = false;
    this.isOpen2 = false;
    this.isOpen3 = false;
  }

  changeTheme() {
    toggleTheme();
  }
}
