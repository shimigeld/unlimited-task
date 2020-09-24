import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Array<Employee>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmpolyees();
  }

  sortHeader(header: string): void {
    this.employees.sort((a, b) =>  (a[header] > b[header]) ? 1 : ((b[header] > a[header]) ? -1 : 0));
  }

}
