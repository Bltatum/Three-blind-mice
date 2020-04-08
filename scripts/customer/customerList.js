import { useEmployees } from "../Employees/employeeDataProvider.js"
import { useCustomers } from "./customerDataProvider.js"
import {customerHTMLrep} from "./customer.js"
import {useEmployeeCustomers} from "../employeeCustomer/employeeCustomerDataProvider.js"

const contentTarget = document.querySelector(".customers")

const render = customers => {
    const employees = useEmployees()
    const customerRelationships = useEmployeeCustomers()

    contentTarget.innerHTML += customers.map(customer => {
        
        const relationships = customerRelationships.filter(cr =>
          cr.customerId === customer.id )
        
        const assignedEmployees = relationships.map(relationship =>{
          return employees.find((employee) => employee.id === relationship.employeeId)
        })
    
    return customerHTMLrep(customer , assignedEmployees)
    }
    ).join("")
}
        


export const customerList = () => {
const customers = useCustomers()

render(customers)
}