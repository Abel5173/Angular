import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() postImg = ''
  // Events are the primary wasys of communicating from child component to parent component
// Data flows into your component via property bindings and flows out of your component through event bindings
// If you want your component to notify his parent about something you can use the Output decorator with EventEmitter to create a custom event
  @Output() imageSelected = new EventEmitter<string>()
// We can use the Output decorator to label our property imageSelected as an event a component can fire to send data to send data to its parent

  constructor(){
    console.log('constructor() called!');
    
  }

}
