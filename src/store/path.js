// import axios from 'axios'

export const getHeaderJWT = () => { 
    return{ headers : 
        {
            'Authorization': `Bearer ${localStorage.getItem('user')}`, 
            'Content-Type' : 'application/json'
        }
    }
}

// export const URL = 'http://192.168.178.214:8000'
export const URL = 'http://127.0.0.1:8000'
// export const URL = 'http://192.168.125.41:8000'