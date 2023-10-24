import { getOtpApi } from './../../services/index';
import { toast } from 'react-toastify';
import { useState } from 'react';
import VerifyOtp from './OtpVerify';
import useCouldown from '../customs/couldown/Couldown';
import GetOtp from './GetOtp';

const Otp = () => {
    const [showVerify, setShowVerify] = useState(false)
    const [mobileNumber, setMobileNumber] = useState("")

    const { start, secondLeft } = useCouldown()

    const getOTP = async (e) => {
        e.preventDefault()
        try {
            const { status } = await getOtpApi({ field: mobileNumber })
            if (status === 201) {
                start()
                toast("Sent code to your mobile", { type: "success" })
                setShowVerify(true)
            }
        } catch (err) {
            console.error('error', err);
            toast("There is a problem.", { type: "error" })
        }

    }

    return (
        <>
            {!showVerify ?
                <GetOtp
                    getOTP={getOTP}
                    mobileNumber={mobileNumber}
                    setMobileNumber={setMobileNumber} />
                :
                <VerifyOtp
                    mobileNumber={mobileNumber}
                    getOTP={getOTP}
                    secondLeft={secondLeft} />
            }

        </>
    )
}

export default Otp