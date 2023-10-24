import axios from 'axios'

const SERVER_URL = "https://api-arshida.iran.liara.run"

// GET OTP 
export const getOtpApi = (body) => {
    const url = `${SERVER_URL}/v1/auth/get-otp`
    return axios.post(url, body)
}

// CHECK OTP 
export const checkOtpApi = (body) => {
    const url = `${SERVER_URL}/v1/auth/check-otp`
    return axios.post(url, body)
}