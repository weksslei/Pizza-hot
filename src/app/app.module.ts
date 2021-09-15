import { NavigationModule } from './shared/components/navigation/navigation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Hello } from './components/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // COMPONENTS MODULES
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
