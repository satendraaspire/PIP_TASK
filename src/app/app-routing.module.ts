import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeeFormComponent } from './forms/employee-form/employee-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'employee-form',
    pathMatch: 'full'
  },
  {
    path:'employee-form',
    component: EmployeeFormComponent,
    title: 'Employee Form'
  },

  
  {
    path: '**',
    component:PageNotFoundComponent,
    title: 'Page Not Found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
