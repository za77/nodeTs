
import jwt from "jsonwebtoken";

interface payload{
    mobile?:string,
    id?:string,
    role?:string    
}

class AuthService{
    protected ACCESS_TOKEN : string = "ACCESS_TOKEN"
    protected Refresh_TOKEN : string = "REFRESH_TOKEN"

    
    refreshToken(payload:payload){
        let refreshToken = jwt.sign(payload, this.Refresh_TOKEN,{expiresIn: "30d", });
        return refreshToken;
    }
    
    accessToken(payload:payload){
        let refreshToken = jwt.sign(payload, this.ACCESS_TOKEN,{expiresIn: "60m", });
        return refreshToken;
    }

}
export default AuthService;
