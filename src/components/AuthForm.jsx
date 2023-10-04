import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AuthForm.module.css";
import "../css/form.css";
import{Link, useNavigate} from 'react-router-dom';



const signupContent = {
    title: "Signup",
    route: "signup",
    buttonText: "Signup!",
};

const signinContent = {
    title: "Signin",
    route: "signin",
    buttonText: "Signin!",
};

const AuthForm = ({ formType = "signup", setToken}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const content = formType === "signup" ? signupContent : signinContent;

    // useEffect(() => {
    //     console.log({token});
    // }, [token]);

    useEffect(() => {
        console.log({message});
    }, [message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submitted");

        axios
        .post(`https://capstone-backend-beta.vercel.app/${content.route}`, {
            email,
            password,
        })
        .then((res) => {
            if (formType === 'signup'){
            setMessage(res.data.message);
        } else {
            setToken(res.data.token);
            navigate('/');
        }
        });

        // navigate("/");
    };



  return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>{content.title}</h2>
        <label className = {styles.label}>
            Email:
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className = {styles.label}>
            Password:
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value={content.buttonText} />
    </form>
  )
}

export default AuthForm