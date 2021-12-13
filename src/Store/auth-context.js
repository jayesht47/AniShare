import React,{ useState,useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout : () =>  {},
    onLogin : (userName,password) => {}
}
)

const AuthContextProvider = props =>{

    const [isLoggedIn , setIsLoggedIn]  = useState(false);

    useEffect(() => {

        const storedLoginInfo = localStorage.getItem("isLoggedIn");

        if('storedLoginInfo' === '1') setIsLoggedIn(true);

    },[]);

    const logoutHandler = () =>{

        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn",'0');
        
    }

    const loginHandler = (userName,password) =>{

        console.info("Inside loginHandler");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn",'1');
    }


    return(
        <AuthContext.Provider
            value ={{
                isLoggedIn:isLoggedIn,
                onLogin : loginHandler,
                onLogout : logoutHandler

            }}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthContext;
export {AuthContextProvider};