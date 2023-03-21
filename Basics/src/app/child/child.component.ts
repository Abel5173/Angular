import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
template: `
<h2>Multi-slot content projection</h2>

Default:
<ng-content></ng-content>

Question:
<ng-content select="[question]"></ng-content>
`})
export class ChildComponent {
  @Input() uName: string = ''
  text: string = ''
  work(e: Event): void {
    this.text = (e.target as HTMLInputElement).value;
  }
  
}
