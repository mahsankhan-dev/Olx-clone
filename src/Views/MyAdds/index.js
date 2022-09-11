import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
import Footer from '../../Component/Footer/Footer'
import { getUserAdd } from '../../config'

function MyAdds(props) {

  const [myAdd, setMyAdd] = useState()

  useEffect(() => {
    const a = userAdd()
  }, [])

  const userAdd = async () => {
    var result = await getUserAdd()
    console.log(result)
    setMyAdd(result)
  }

  return (
    <>
      <Header
        changeScreen0={() => props.changeScreen("dashboard")}
        changeScreen={() => props.changeScreen("login")}
        changeScreen1={() => props.changeScreen("createadd")}
        changeScreen2={() => props.changeScreen("profile")}
        changeScreen3={() => props.changeScreen("myadds")} />
      <Main />
      {myAdd ?

        <>
          <div className='header'>
            {myAdd.map(item => {
              return <div className='allcard'>
                <div className='card_img'>
                  <img src={item.add.Url} className='img-card' width={100} height={100} alt="bikeimage" />

                </div>
                <div className='detail'>

                  <div>
                    {item.add.title}
                    <div className='heart'>
                      <img src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg" width={20} height={20} alt="" />
                    </div>
                  </div>
                  <div className='rs'>
                    <b> RS {item.add.price} </b>
                  </div>

                  {/* <div className='desc'>
                    <b>Description : </b> {item.add.description}
                </div> */}

                  <div className='location'>
                    <b>Location : </b> {item.add.location}
                  </div>
                </div>
              </div>
            })}
          </div>
        </>

        : ''}

      <Footer />
    </>
  )
}

export default MyAdds