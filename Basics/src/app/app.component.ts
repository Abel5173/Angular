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
  imgURL = 'https://thumbs.dreamstime.com/b/happy-golden-retriever-puppy-seven-week-old-outdoors-sunny-day-46046484.jpg';
  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }
  getName(){
    return this.name;
  }
}