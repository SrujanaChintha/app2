import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class  MyComponentComponent {
  // String Interpolation
  title: string = 'Angular Data Binding Demo';

  // Event Binding
  message: string = 'Click the button to change this message!';

  // Class Binding
  isActive: boolean = false;

  // Property Binding
  inputValue: string = 'Hello, Angular!';

  // Style Binding
  isSpecial: boolean = true;

  // Event Binding Method
  changeMessage() {
    this.message = 'You clicked the button!';
  }

  // Toggle Active Class
  toggleClass() {
    this.isActive = !this.isActive;
  }

  // Toggle Style Binding
  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
}
