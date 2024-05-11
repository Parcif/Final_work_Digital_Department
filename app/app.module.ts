import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SubwoofersComponent } from './subwoofers/subwoofers.component';
import { AmplifiersComponent } from './amplifiers/amplifiers.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakersComponent,
    SubwoofersComponent,
    AmplifiersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }