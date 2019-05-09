import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';


                                                                                                                                   


@NgModule({       
  declarations: [                                                                               
  AppComponent,
  ProfileComponent
  
],

imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

        
  ],

  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }
