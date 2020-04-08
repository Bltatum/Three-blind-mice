import { getComputers } from "./Computer/computerDataProvider.js";
import { getEmployees } from "./Employees/employeeDataProvider.js";
import { EmployeeList } from "./Employees/employeeList.js";
import { getDepartment } from "./department/departmentDataProvider.js";
import { getLocation } from "./location/locationDataProvider.js"
import { getEmployeeCustomers } from "./employeeCustomer/employeeCustomerDataProvider.js";
import { getCustomers } from "./customer/customerDataProvider.js";
import { customerList } from "./customer/customerList.js";



getEmployees()
.then(getComputers)
.then(getDepartment)
.then(getLocation)
.then(getCustomers)
.then(getEmployeeCustomers)
.then(EmployeeList)
.then(customerList)

