import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import SignIn from '../components/signin/SignIn'
import SignUp from './../components/signup/SignUp';
import Otp from '../components/otp/Otp';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h2>404 - Not Found</h2>
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/otp",
        element: <Otp />
    },
],{
    basename:"https://n4jari.github.io/otp-auth"
})