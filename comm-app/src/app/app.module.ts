import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { SiblingCompBComponent } from './sibling-comp-b/sibling-comp-b.component';
import { SiblingCompComponent } from './sibling-comp/sibling-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SiblingCompComponent,
    SiblingCompBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
