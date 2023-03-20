import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() uName: string = ''
  text: string = ''
  work(e: Event): void {
    this.text = (e.target as HTMLInputElement).value;
  }
  
}
