  
  import css from "./login.module.css";
  import { useState } from "react";
  import { useRouter } from "next/router";

  function LoginPage(){
const [passwordValue, setPasswordValue] = useState('');
const [emailValue, setEmailValue] = useState('');
const router = useRouter();

const login = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
   router.push('/profile');

} 

const handlePasswordInput = (e:any) =>{
  
    setPasswordValue(e.target.value);

};
const handleEmailInput = (e:any) =>{

    setEmailValue(e.target.value)
}
     return(

        <>
        <div className={css.container}>
            <h1>Log in</h1>
            <form action=""  method="post" name="login" onSubmit={login}>
                <div className={css.email}>
                    <label htmlFor="email">Email</label>
                     <input type="email" 
                     id="email" 
                     name="email" 
                     onChange={handleEmailInput}
                     value={emailValue}
                     placeholder="example.@mail.com" required></input>
                </div>
                <div className={css.password}>
                   <label htmlFor="psw">Password</label>
                    <input type="password"
                        id="psw"
                        name="psw"
                        onChange={handlePasswordInput}
                        value={passwordValue}
                        minLength={6} 
                        required></input>  
               <span className={css.massage} style={{ display: `${passwordValue.length >= 6? "none" : "block"}` }}>
                Your password must be at least 6 characters long</span>
                </div>
                <button className={css.loginBtn} type="submit" >Log in</button>
                
            </form> 
        </div>
        
        </>
     )
  }
  export default LoginPage;