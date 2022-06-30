import { useState } from 'react'

//styles
import styles from './Signup.module.css'


export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, userName)
    }

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Signup</h2>
            <label>
                <span>Email: </span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            <label>
                <span>Password: </span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>

            <label>
                <span>User Name: </span>
                <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
            </label>

            <button className='btn'>Signup</button>
        </form>
    )
}
