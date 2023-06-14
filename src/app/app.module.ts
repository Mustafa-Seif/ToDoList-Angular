import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContainerComponent } from './components/container/container.component';
import { ItemsComponent } from './components/items/items.component';
import { FormsModule } from '@angular/forms';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ItemsComponent,
    ItemsContainerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
