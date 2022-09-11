import { useState } from 'react'
import { register, uploadImage, updateProfile } from '../../config'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './Signup.css'




function SignUp(props) {

    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)
    const [imageURI, setImageURI] = useState()

    const navigate = useNavigate();


    const SignUp = async () => {
        setLoading(true)
        try {
            const result = await register(form)
            const url = await uploadImage(imageURI)
            await updateProfile({ profilePic: url })
            // alert('Register Success Fully')

            swal({
                title: "Good job!",
                text: "Register Successfully!",
                icon: "success",
                button: "OK",
            });
            navigate('/')
            // props.changeScreen('login')

        } catch (e) {
            // alert(e.message)
            swal({
                title: "Error!",
                text: e.message,
                icon: "error",
                button: "OK",
            });
        }
        finally {
            setLoading(false)
        }
    }

    const updateForm = (e, key) => {
        setForm({ ...form, [key]: e.target.value })
    }



    return (
        <div className="Container">
            <img src="https://www.olx.com.pk/assets/iconOLXLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" />


            <div className="my-Form">

                <div>
                    <h4>WELCOME TO OLX</h4>
                </div>

                <div className="myh4">
                    <h4>The trusted community of buyers and sellers.</h4>
                </div>

                <div>
                    <input className='myinput4' type="file" onChange={(e) => setImageURI(e.target.files[0])} />
                </div>

                <div>
                    <input className='myinput1' type='text' onChange={(e) => updateForm(e, 'name')} placeholder="Enter Your Name" />
                </div>

                <div>
                    <input className='myinput2' type='email' onChange={(e) => updateForm(e, 'email')} placeholder="Enter Your Email" />
                </div>

                <div>
                    <input className='myinput3' type='password' onChange={(e) => updateForm(e, 'password')} placeholder="Enter Your Password" />
                </div>

                {loading ?
                    <img className='myImage' src='https://i.stack.imgur.com/MnyxU.gif' />
                    :
                    <>
                        <button className='register1' onClick={SignUp}>Register</button>
                        <a className="l-to-s" onClick={() => { navigate('/') }}>
                            I have Account!
                        </a>
                    </>
                }
            </div>
        </div>
    )
}

export default SignUp;