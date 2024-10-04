import https from "./config";
import {Auth} from "@types"
const auth:Auth = {
    sign_in: (data)=> https.post("auth/sign-in", data),
    // sing_up: ()=> https.post("/auth/sign-up"),
}

export default auth