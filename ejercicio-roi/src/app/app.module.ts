import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoModule } from './features/alumnos/alumno.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StrengthBarComponent } from './features/authentication/components/strength-bar/strength-bar.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AlumnoModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
