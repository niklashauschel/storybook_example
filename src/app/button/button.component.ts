import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() backgroundColor: string = '#999fa0';
  @Input() textColor: string = 'black';
  @Input() label: string = 'Change your button label!';


  constructor() { }

  ngOnInit(): void {
  }

  test(bColor: string) {
      alert(`Hello your background color is "${bColor}"`);
  }

}
