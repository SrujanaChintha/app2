import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  message: string = 'Hello from MyComponent!';
  imageUrl: string = 'assets/angular-logo.png';
  buttonDisabled: boolean = false;
}
