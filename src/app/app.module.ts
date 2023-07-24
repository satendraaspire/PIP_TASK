import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Routing imports
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Toastr imports //
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Reactive form import
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './forms/employee-form/employee-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
