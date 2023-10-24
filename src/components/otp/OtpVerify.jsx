import styles from './OtpVerify.module.css'
import img from '../../assets/imgs/otp.png'
import { checkOtpApi } from '../../services';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Button from '../customs/button/button';

const VerifyOtp = ({ mobileNumber, getOTP, secondLeft }) => {
    const [code, setCode] = useState("")

    const checkOtp = async (e) => {
        e.preventDefault()
        try {
            const { status } = await checkOtpApi({ field: mobileNumber, code })
            if (status === 201) {
                toast("OTP verified", { type: "success" })
            }
        } catch (err) {
            console.log(err);
            toast("There is a problem!", { type: "error" })
        }
    }

    return (
        <div className={styles.container}>
            <img src={img} alt='Verify Otp' className={styles.img} />
            <div className={styles.content}>
                <h2>OTP Verification</h2>
                <p>Enter the OTP to {mobileNumber}</p>
                <form className={styles.form} onSubmit={checkOtp}>
                    <label>Enter Code</label>
                    <input type='number' value={code} onChange={(e) => setCode(e.target.value)} />
                    <Button text="Verify" onChange={null} />
                </form>
                <p className={styles.description}>
                    <span>Didn’t you receive the OTP?</span>
                    <span>
                        {secondLeft > 0 ? `(${secondLeft})` : (
                            <button className={styles.resendCode} onClick={getOTP}>Resend OTP</button>
                        )}
                    </span>
                </p>
            </div>
        </div >
    )
}

export default VerifyOtp