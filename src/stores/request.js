import {
    useHistory,
} from "react-router-dom";

const domainName = 'https://api-test.potentia.tech'

const request = (url, method, body = {} )=>{

    let config = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    if( method !== 'GET' ){
        config.body = JSON.stringify(body)
    }

    return fetch( domainName + url, config)
    .then( response => {
        console.log(response);
        
        if ( response.status == 401 ){
            let history = useHistory()
            alert( '登入逾時, 請重新登入' )
            history.push("/")
        }
        return response.json()
    })
    .catch( (err) =>{
        alert(String(err))
    } )
        
}

export default request