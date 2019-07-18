import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  searchText: string;
  constructor(private employeeService: EmployeeService, private searchService: SearchService) { }

  ngOnInit() {
    this.getEmployees();
    this.searchService.inputValue$.subscribe(res => this.searchText = res);
  }

  getEmployees(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }
}
