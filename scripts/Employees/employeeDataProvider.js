
let employees = [] 

export const getEmployees =()=>{
    return fetch('http://localhost:8088/employees')
    .then(res => res.json())
    .then(parsed => {
        employees = parsed
    })
}

export const useEmployees =()=> employees.slice()