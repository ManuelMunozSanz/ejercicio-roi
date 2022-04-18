import { AlumnoEditComponent } from './features/alumnos/components/alumno-edit/alumno-edit.component';
import { AlumnoFormComponent } from './features/alumnos/components/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './features/alumnos/components/alumno-list/alumno-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AlumnoFormComponent },
  { path: 'form', component: AlumnoFormComponent },
  { path: 'list', component: AlumnoListComponent },
  { path: 'edit/:id', component: AlumnoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
