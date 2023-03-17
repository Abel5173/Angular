import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['color: "red"']
})
export class AppComponent {
  name = 'Luis';
  imgURL = 'https://picsum.photos/id/237/200/300';
  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }
  getName(){
    return this.name;
  }
  loadImg(event: string){
    console.log(event)
  }
}