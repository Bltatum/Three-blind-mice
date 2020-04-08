export const employeeHTMLrep =(employee, computer, department, location, assignedCustomers)=>{
  
    return`
    <article class=employee>
      <div><h3>${employee.firstName} ${employee.lastName}</h3></div>
        <ul>
          <li>Age: ${employee.age}</li>
          <li>PC: ${computer.year} ${computer.model}</li>
          <li>Department: ${department.name}</li>
          <li>Location: ${location.name}</li>
          <li>Assigned Customers: 
            ${assignedCustomers.map(customer => `${customer.name}`).join(" , ")}
          </li>
      </ul>
    </article>
    `
}