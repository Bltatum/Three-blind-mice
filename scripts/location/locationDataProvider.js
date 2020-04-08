let location = [] 

export const getLocation =()=>{
    return fetch('http://localhost:8088/location')
    .then(res => res.json())
    .then(parsed => {
        location = parsed
    })
}

export const useLocation =()=> location.slice()