import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/login.css';



const Register = () => {

    const [store, setStore] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const { push } = useHistory();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            account_type: "Merchant",
            email: email,
            business_name: store,
            phone_no:phone,
            password: password,
        }
        const res = await axios.post("http://54.167.27.9:1994/api/register/NewUserRegistration", user);
        console.log("Register Response", res.data);
        if (res.data.status === 200) {
            push("/dashboard");
        }
        else {
            return false;
        }
    };


        return (
            <div>

                <h1 className="forgot-sty">Register Here
                </h1>


                <div className="form-sty">

                    <form action="/action_page.php">
                        <input className="inp-sty" type="text" id="fname" name="fname" value={store} onChange={(e) => setStore(e.target.value)} placeholder="Store / Business Name" /><br /><br />
                        <input className="inp-sty" type="text" id="fname" name="fname" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" /><br /><br />
                        <input className="inp-sty" type="text" id="fname" name="fname" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br /><br />
                        <input className="inp-sty" type="text" id="lname" name="lname" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" /><br /><br />
                        <input className="inp-sty" type="text" id="fname" name="fname" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" /><br /><br />
                        <input className="submit-sty" onClick={(e) => HandleSubmit(e)} type="submit" value="Sign Up" />
                    </form>
                </div>


            </div>);

    }


export default Register;