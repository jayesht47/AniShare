
import Input from "../../UI/Input";

const Login = props =>{

    return(
        <form>
            <Input type = "text" label = "User Name" />
            <Input type = "password" label = "Password"/>
        

        </form>
    );

}

export default  Login;