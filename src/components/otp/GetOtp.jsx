import styles from './GetOtp.module.css'
import Button from "../customs/button/button"
import img from '../../assets/imgs/otp.png'

const GetOtp = ({ mobileNumber, getOTP, setMobileNumber }) => {
    return (
        <div className={styles.container}>
            <img src={img} alt='otp' className={styles.img} />
            <div className={styles.content}>
                <h2>OTP Verification</h2>
                <p>We will send  you a one time password to your registered mobile number</p>
                <form className={styles.form} onSubmit={getOTP}>
                    <label>Enter Mobile Number</label>
                    <input type='number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    <Button text="Get OTP" onChange={null} />
                </form>
            </div>
        </div>
    )
}

export default GetOtp