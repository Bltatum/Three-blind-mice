let employeeCustomers= [] 

export const getEmployeeCustomers=()=>{
    return fetch('http://localhost:8088/employeeCustomers')
    .then(res => res.json())
    .then(parsed => {
        employeeCustomers= parsed
    })
}

export const useEmployeeCustomers=()=> employeeCustomers.slice()