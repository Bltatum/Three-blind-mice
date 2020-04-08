let department = [] 

export const getDepartment =()=>{
    return fetch('http://localhost:8088/department')
    .then(res => res.json())
    .then(parsed => {
        department = parsed
    })
}

export const useDepartment =()=> department.slice()