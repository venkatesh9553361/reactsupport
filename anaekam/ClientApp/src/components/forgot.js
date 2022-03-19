
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/login.css';
import { Strings } from "./Helper";
import { Alert } from '@mui/material';


function Forget(){
    const { push } = useHistory();
    const [userId, setUserId] = useState("");

    const [apiMsg, setApiMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://54.167.27.9:1994/api/forgotPwd/ForgotPassword", { user_id: userId })
            .then((res) => {
                console.log(res)
                setApiMsg(res.data.message)
            })
            .catch((error) => {
                console.log(error.reponse);
            });
    }

    return (
        <div className='login_container'>
            <div className='login_wrapper'>
                <div className='login_card'>
                    <div className='side_picture'>

                        <div className="side_picture_wrapper" style={{ height: "100%" }}>
                            <img className="anekam_image" src={Strings.ANEKAM_IMAGE}></img>
                        </div>
                    </div>
                    <div className='main_login'>
                        <div className='main_login_header'>
                         <h5 className='heading_two'>Forgot Password </h5>
                        </div>
                        <div className='main_login_body'>
                            <div className='details_userId'>
                                <input id="userid" type='tex' placeholder='Submit You Email Address or Mobile Number' value={userId} onChange={(e) => {
                                    setUserId(e.target.value);
                                    setApiMsg("");}} />
                            </div>
                                <div className='button_wrapper'>
                                    <button className='submit_btn' onClick={handleSubmit} type='submit' >Submit</button>
                            </div>
                        </div>
                        <div>
                            {apiMsg.length > 0 &&
                                <Alert sx={{ width: "300px", marginTop: "10px" }} severity="info" > {apiMsg} </Alert>}
                            </div>

                        <div style={{ marginTop: "10px" }} >
                            <span>Try to<span onClick={() => (push("/"))}>  Sign In </span> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );


}

export default Forget;