import styles from './SignIn.module.css'
import { toast } from 'react-toastify';
import Shapes from '../customs/shapes/Shapes';
import Button from './../customs/button/button';

const SignIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        toast("Sign in Successfuly", { type: "success" })
    }

    return (
        <div className={styles.container}>
            {/* CUSTOM SHAPES*/}
            <Shapes />

            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Sign in</h2>
                <label>Email Address</label>
                <input type='email' />
                <label>Password</label>
                <input type='password' />
                <p>Forgot Password?</p>
                {/* CUSTOM BUTTON */}
                <Button type="submit" text="Sign In" icon="↗" onChange={null} />
            </form>

        </div>
    )
}

export default SignIn