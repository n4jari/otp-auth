import styles from './SignUp.module.css'
import Shapes from '../customs/shapes/Shapes';
import { useNavigate } from 'react-router-dom';
import Button from './../customs/button/button';

const SignUp = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/otp')
    }
    return (
        <div className={styles.container}>

            {/* CUSTOM SHAPES BACKGROUND*/}
            <Shapes />

            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Sign up</h2>
                <label>Email Address</label>
                <input type='email' />
                <label>Password</label>
                <input type='password' />
                <label>Confirm Password</label>
                <input type='password' />
                {/* CUSTOM BUTTON */}
                <Button type="submit" text="Sign Up" icon="↗" onChange={null} />
            </form>

        </div>
    )
}

export default SignUp