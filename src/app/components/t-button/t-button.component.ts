import { Component, Input } from '@angular/core';

@Component({
  selector: 't-button',
  templateUrl: './t-button.component.html',
  styles: [
  ]
})
export class TButtonComponent {
  @Input() type: 'submit' | 'button' | 'reset' = 'button';

  @Input() buttonType: 'primary' | 'secondary' | 'terciary' = 'primary';
}
