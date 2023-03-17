import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PostComponent } from './post/post.component';
import { ChildComponent } from './child/child.component';

  @NgModule({
    imports: [
      BrowserModule
    ],
    declarations: [
      AppComponent,
      ChildComponent,
      // PostComponent
    ],
    bootstrap: [AppComponent]
  })
export class AppModule{ }