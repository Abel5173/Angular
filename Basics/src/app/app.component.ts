import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['color: "red"']
})
export class AppComponent {
logImg($event: Event) {
throw new Error('Method not implemented.');
}
  name = 'Luis';
  imgURL = 'https://picsum.photos/id/237/200/300';
  images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300'
  ]
  currentDate = new Date() 
  cost = 2000
  temprature = 25.3 
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }

  blueClass = false
  fontSize = 36

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }
  getName(){
    return this.name;
  }
  loadImg(event: string){
    console.log(event)
  }
  // userName: string = "John Smith"
}