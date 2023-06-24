
import Image from "next/image";
import Profile_pic from "../../public/profile+picture.png";
import Layout from "@/components/layout/layout";
import css from "../styles/profile.module.css";
import { useEffect, useState} from "react";



function Profile(){
    interface InitialState{
        name:string
        email:string
        text:string 

    }

    const initialState:InitialState = {
        name:'John Smith',
        email:'example@mail.com',
        text: 'Lorem ipsum dolor sit amet'
    }

const [data, setData] = useState(JSON.parse(localStorage.getItem("newData")!) || initialState)

const [isActive, setIsActive] = useState(false);
const [textarea, setTextarea] = useState(data.text);  
const [nameInput, setNameInput] = useState(data.name); 
const [emailInput, setEmailInput] = useState(data.email); 


    // let formData = JSON.parse(localStorage.getItem("newData")!)
    // if(formData){
    //     setData(formData)
    // }

function changeData(e: { preventDefault: () => void; }) {
    
    const newData = {
      name: nameInput,
      email: emailInput,
      text: textarea,
    };
    e.preventDefault()
    setData(newData);

    localStorage.setItem("newData",JSON.stringify(newData))
  }


    return(
        <Layout>
        <div className={css.container}>
            <div className={css.image}>
                <h1>PROFILE</h1>
                <Image src={Profile_pic} alt="profile avatar"/>
            </div>
            <form method="POST" className={css.form} onSubmit={changeData} >
                <div className={css.details}>
                     <label htmlFor="name">YOUR NAME</label>
                     <p style={{ display: `${isActive ? "none" : "block"}` }}>{data.name}</p>
                    {isActive && <input id="name"
                            name="name"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                     ></input>}
                    <label htmlFor="email">YOUR EMAIL</label>
                    <p style={{ display: `${isActive ? "none" : "block"}` }}>{data.email}</p>
                    {isActive && <input id="email"
                            name="email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                    ></input>} 
                    <button className={css.btn} onClick={() => setIsActive(!isActive)} type="submit">{!isActive? 'EDIT PROFILE' : 'SUBMIT'}</button>
                </div>
                <div className={css.description}>
                    <h1 className={css.title}>ABOUT ME</h1>
                    <p className={css.text} style={{ display: `${isActive ? "none" : "block"}` }}>{data.text}</p>
                    {isActive  && <textarea
                        id="info"
                        title="about me"
                        onChange={(e) => setTextarea(e.target.value)}
                        value={textarea}></textarea>}
                </div> 
            </form>
        </div>         
        </Layout>       
    )
}

export default Profile;