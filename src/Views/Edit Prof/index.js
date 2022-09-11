import React, { useState } from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
import { updateProfile, uploadImage } from '../../config'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import './edit.css'


function EditProf() {
    const navigate = useNavigate()
    const [imageURI, setImageURI] = useState()
    const [loading, setLoading] = useState(false)

    const UpdateProfile = async () => {
        setLoading(true)
        try {
            const datas = await uploadImage(imageURI)
            await updateProfile({ profilePic: datas })
            swal({
                title: "Good job!",
                text: "Update Successfully!",
                icon: "success",
                button: "OK",
            });
            navigate('/profile')

        } catch (e) {
            swal({
                title: "Empty !",
                text: "Empty value is not allowed!",
                icon: "error",
                button: "OK",
            });
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <Main />

            <div className='my-headers'>
                <h1>Upload New Profile</h1>
                <div className="headers">

                    <input
                        type="file"
                        onChange={(e) => setImageURI(e.target.files[0])}

                    />

                    {!loading ?
                        <>
                            <button onClick={UpdateProfile}>Submit</button>
                        </>
                        :
                        <>
                            <img className='myImage' src='https://i.stack.imgur.com/MnyxU.gif' />
                        </>
                    }
                </div>
            </div>


            <Footer />
        </>
    )
}

export default EditProf