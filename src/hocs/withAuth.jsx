import { Navigate} from "react-router-dom";
import { decodeJWT } from "../utils/decodeJWT";

const withAuth = (Component) => {
    
    const Auth = (props) => {
        const token = localStorage.getItem('token')

        if (!token) {
            return <Navigate to="/login" />
        }

        const expiration = decodeJWT(token).exp;
        if (expiration < Date.now() / 1000) {
            localStorage.removeItem('token');
            localStorage.removeItem('loggedIn');
            return <Navigate to="/login" />
        }

        return (
            <Component {...props} />
        )
    }
    return Auth;
}

export default withAuth