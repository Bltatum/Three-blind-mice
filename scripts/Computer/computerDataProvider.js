let computers = [] 

export const getComputers =()=>{
    return fetch('http://localhost:8088/computers')
    .then(res => res.json())
    .then(parsed => {
        computers = parsed
    })
}

export const useComputers =()=> computers.slice()