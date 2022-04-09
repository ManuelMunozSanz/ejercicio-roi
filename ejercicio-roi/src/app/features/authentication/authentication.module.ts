import { StrengthBarComponent } from './components/strength-bar/strength-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    StrengthBarComponent
  ],
  imports: [
    CommonModule,

    MatProgressBarModule
  ],
  exports:[
    StrengthBarComponent
  ]
})
export class AuthenticationModule { }
