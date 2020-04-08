let customers = [] 

export const getCustomers =()=>{
    return fetch('http://localhost:8088/customers')
    .then(res => res.json())
    .then(parsed => {
        customers = parsed
    })
}

export const useCustomers =()=> customers.slice()