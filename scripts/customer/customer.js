export const customerHTMLrep = (customer, assignedEmployees) =>{
    return `
    <article>
    <div><h3>${customer.name}</h3></div>
    <div>Employees assigned:</div>
     <p> ${assignedEmployees.map(e => `${e.firstName} ${e.lastName}`).join(" , ")}</p>
    </article>
    `
}

