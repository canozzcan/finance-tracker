import { NavLink } from 'react-router-dom'

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>Finance Tracker</li>

                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">Signup</NavLink></li>
            </ul>
        </nav>
    )
}
