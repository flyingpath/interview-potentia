import request from './request.js'

export const login = (account, passwd) => {
    request('/api/login', 'POST', {
        account: account,
        password: passwd
    })
    .then( d => {
        console.log(d);
        
    } )
}