import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private empolyeeData: Array<Employee> = [
    {
      firstName: 'Shimon',
      lastName: 'Geld',
      phoneNum: '0547558111'
    },
    {
      firstName: 'Ben',
      lastName: 'Israel',
      phoneNum: '0520213131'
    }
  ];

  getEmpolyees(): Array<Employee> {
    return this.empolyeeData;
  }

  addEmoplyee(employee: Employee): void {
    this.empolyeeData.push(employee);
  }
}
