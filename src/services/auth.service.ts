
import jwt from "jsonwebtoken";

class AuthService{
    protected ACCESS_TOKEN : string = ""
    protected Refresh_TOKEN : string = ""

    refreshToken(){
        let refreshToken = jwt.sign({}, this.Refresh_TOKEN,{expiresIn: "365d", });
        return refreshToken;
    }
    
    accessToken(payload:any){
        let refreshToken = jwt.sign(payload, this.ACCESS_TOKEN,{expiresIn: "60m", });
        return refreshToken;
    }

}
export default AuthService;
