import React from 'react'
import styles from '../css/Login.module.scss';

import { login } from '../stores/auth'

const doLogin = (account, passwd) => {
    login(account, passwd)
}

const Login = () => {

    const [ account, setAccount ] = React.useState('')
    const [ passwd, setPasswd ]   = React.useState('')

    return (
        <div className={styles.main}>
            <div className={styles.body}>
                <div className={styles.label}>Account</div>
                <input 
                    className={styles.input}  
                    type     ="text"
                    value    ={account}
                    onChange ={ (e)=>setAccount(e.target.value) }
                />
                <div className={styles.label}>Password</div>
                <input 
                    className={styles.input} 
                    type     ="password"
                    value    ={passwd}
                    onChange ={ (e)=>setPasswd(e.target.value) }
                />
                <div>
                    <input type="checkbox" name="remember" />
                    <label htmlFor={'remember'} >
                        記憶帳密
                    </label>
                </div>
                <div className={styles.submitDiv}>
                    <button onClick={ () => doLogin(account, passwd)}>
                        登入
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login