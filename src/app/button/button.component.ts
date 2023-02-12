import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() backgroundColor: string = 'tomato';
  @Input() textColor: string = 'white';
  @Input() label: string = 'Change your button label!';


 public displayColor(bColor: string): void {
      alert(`Hello your background color is "${bColor}"`);
  }

}
