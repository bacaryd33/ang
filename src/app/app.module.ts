import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonpremierComponent } from './monpremier/monpremier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MonpremierComponent,
    AppareilComponent,
    PostListComponentComponent,
    PostListItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
