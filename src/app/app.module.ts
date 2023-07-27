import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MultiformsComponent } from './multiforms/multiforms.component';
import { MychartComponent } from './mychart/mychart.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeComponent,
    HomeComponent,
    MainComponent,
    MultiformsComponent,
    MychartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
