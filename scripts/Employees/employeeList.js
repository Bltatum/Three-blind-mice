import {useEmployees} from "./employeeDataProvider.js";
import {useComputers} from "../Computer/computerDataProvider.js";
import {employeeHTMLrep} from "../Employees/employee.js"
import { useDepartment } from "../department/departmentDataProvider.js";
import { useLocation } from "../location/locationDataProvider.js";
import {useEmployeeCustomers} from "../employeeCustomer/employeeCustomerDataProvider.js";
import {useCustomers} from "../customer/customerDataProvider.js"

const contentTarget = document.querySelector(".employees")

 const render = employees => {
        const computers = useComputers()
        const department = useDepartment()
        const location = useLocation()
        const customers = useCustomers()
        const customerRelationships = useEmployeeCustomers()

        contentTarget.innerHTML += employees.map(employee => {
            //find related computer IDs
            const relatedComputer = computers.find(computer => computer.id === employee.computerId)
            
            const relatedDepartment = department.find(department => department.id === employee.departmentId)
   
            const relatedLocation = location.find(location => location.id === employee.locationId)
            
            const relationships = customerRelationships.filter(cr =>
              cr.employeeId === employee.id )
            
            const assignedCustomers = relationships.map(relationship =>{
              return customers.find((customer) => customer.id === relationship.customerId)
            })
        
        return employeeHTMLrep(employee, relatedComputer, relatedDepartment, relatedLocation, assignedCustomers)
        }
        ).join("")
    }
            
  

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}
