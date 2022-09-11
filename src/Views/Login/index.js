import React, { useState } from "react";
import { SignIn } from "../../config";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import './login.css'
import { addUser } from '../../Store/Action/UserAction';
import { useDispatch } from 'react-redux';




function Login(props) {

    const [form, setForm] = useState()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();



    const Login = async () => {
        const { email, password } = form
        setLoading(true)
        try {
            const result = await SignIn(email, password)
            const userObj = { email: result[0].email, name: result[0].name, pic: result[0].profilePic }
            dispatch(addUser(userObj))
            console.log('mera object', userObj)
            // console.log('Login Success')

            swal({
                title: "Good job!",
                text: "Login Successfully!",
                icon: "success",
                button: "OK",
            });
            navigate('dashboard')
            // props.changeScreen('dashboard')
        } catch (e) {
            // alert(e.message)
            swal({
                title: "Error!",
                text: e.message,
                icon: "error",
                button: "OK",
            });
        } finally {
            setLoading(false)
        }
    }

    const updateForm = (e, key) => {
        setForm({ ...form, [key]: e.target.value })
    }

    return (
        <div className="Container1">
            <img src="https://www.olx.com.pk/assets/iconOLXLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" />
            <div className="my-Form1">

                <div>
                    <h4>WELCOME TO OLX</h4>
                </div>

                <div className="myh4">
                    <h4>The trusted community of buyers and sellers.</h4>
                </div>

                <div>
                    <input className="input-11 " onChange={e => updateForm(e, 'email')} type='email' placeholder="Email" />
                </div>

                <div>
                    <input onChange={e => updateForm(e, 'password')} type='password' placeholder="Password" />
                </div>

                {loading ?
                    <img className='myImage1' src='https://i.stack.imgur.com/MnyxU.gif' />
                    :
                    <>
                        <button className='register' onClick={Login}>Login</button>
                        <a className="l-to-s" onClick={() => { navigate('signup') }}>
                            I dont have'n account!
                        </a>
                    </>
                }

            </div>
        </div>
    )
}

export default Login;