import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { EmpolyeeFormComponent } from './empolyee-form/empolyee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalculatorComponent,
    EmployeesComponent,
    EmpolyeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
