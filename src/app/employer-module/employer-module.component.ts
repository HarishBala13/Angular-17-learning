import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employer-module.component.html',
  styleUrl: './employer-module.component.css',
})
export class EmployerModuleComponent {
  employeeDetails: any = '';
  isShowButton: boolean = true;
  isHideButton: boolean = false;

  ngOnInit() {
    this.employeeDetails = [
      {
        employee_id: 1,
        employee_name: 'John Doe',
        employee_designation: 'Software Engineer',
        employee_location: 'New York',
        employee_address: '123 Main St, Apt 4B, New York, NY',
        employee_salary: 80000,
      },
      {
        employee_id: 2,
        employee_name: 'Jane Smith',
        employee_designation: 'Marketing Specialist',
        employee_location: 'San Francisco',
        employee_address: '456 Market St, Suite 200, San Francisco, CA',
        employee_salary: 75000,
      },
      {
        employee_id: 3,
        employee_name: 'Bob Johnson',
        employee_designation: 'HR Manager',
        employee_location: 'Chicago',
        employee_address: '789 Oak St, Chicago, IL',
        employee_salary: 90000,
      },
      {
        employee_id: 4,
        employee_name: 'Alice Johnson',
        employee_designation: 'Graphic Designer',
        employee_location: 'Los Angeles',
        employee_address: '321 Pine St, Apt 7D, Los Angeles, CA',
        employee_salary: 85000,
      },
      {
        employee_id: 5,
        employee_name: 'Michael Wang',
        employee_designation: 'Financial Analyst',
        employee_location: 'Houston',
        employee_address: '543 Elm St, Suite 300, Houston, TX',
        employee_salary: 82000,
      },
      {
        employee_id: 6,
        employee_name: 'Elena Garcia',
        employee_designation: 'Project Manager',
        employee_location: 'Denver',
        employee_address: '654 Oak St, Denver, CO',
        employee_salary: 95000,
      },
      {
        employee_id: 7,
        employee_name: 'Samuel Turner',
        employee_designation: 'Sales Representative',
        employee_location: 'Seattle',
        employee_address: '876 Cedar St, Suite 100, Seattle, WA',
        employee_salary: 78000,
      },
      {
        employee_id: 8,
        employee_name: 'Sophie Patel',
        employee_designation: 'UX/UI Designer',
        employee_location: 'Austin',
        employee_address: '765 Maple St, Austin, TX',
        employee_salary: 90000,
      },
      {
        employee_id: 9,
        employee_name: 'Carlos Ramirez',
        employee_designation: 'Operations Manager',
        employee_location: 'Phoenix',
        employee_address: '234 Birch St, Phoenix, AZ',
        employee_salary: 92000,
      },
      {
        employee_id: 10,
        employee_name: 'Megan Lewis',
        employee_designation: 'Content Writer',
        employee_location: 'Atlanta',
        employee_address: '432 Walnut St, Apt 5A, Atlanta, GA',
        employee_salary: 75000,
      },
      {
        employee_id: 11,
        employee_name: 'Victor Chen',
        employee_designation: 'Systems Analyst',
        employee_location: 'Dallas',
        employee_address: '543 Pine St, Dallas, TX',
        employee_salary: 88000,
      },
      {
        employee_id: 12,
        employee_name: 'Emily Foster',
        employee_designation: 'Customer Support Specialist',
        employee_location: 'Miami',
        employee_address: '876 Oak St, Miami, FL',
        employee_salary: 72000,
      },
      {
        employee_id: 13,
        employee_name: 'David Nguyen',
        employee_designation: 'Network Engineer',
        employee_location: 'Boston',
        employee_address: '987 Maple St, Boston, MA',
        employee_salary: 93000,
      },
      {
        employee_id: 14,
        employee_name: 'Olivia Taylor',
        employee_designation: 'Quality Assurance Analyst',
        employee_location: 'San Diego',
        employee_address: '345 Cedar St, San Diego, CA',
        employee_salary: 87000,
      },
      {
        employee_id: 15,
        employee_name: 'Henry Clark',
        employee_designation: 'Business Analyst',
        employee_location: 'Philadelphia',
        employee_address: '654 Walnut St, Apt 8B, Philadelphia, PA',
        employee_salary: 89000,
      },
    ];
  }

  hideSalary() {
    this.isHideButton = false;
    this.isShowButton = true;
  }

  showSalary() {
    this.isHideButton = true;
    this.isShowButton = false;
  }
}
