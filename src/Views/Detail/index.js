import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdById } from "../../config";
import Header from "../../Component/Header/Header";
import Main from "../../Component/Main/Main";
import Footer from "../../Component/Footer/Footer";
import { getuserData, db } from "../../config";
import { getDoc, doc } from 'firebase/firestore'
import "./detail.css";


function Detail() {
  const [addId, setAddId] = useState();
  const prams = useParams();
  const { adId } = prams;
  const [ad, setad] = useState()
  const [sellerDetail, setSellerdetail] = useState({})

  useEffect(() => {
    getAddbyid()
  }, [])


  useEffect(() => {
    getAndSetId();
  }, []);


  const getAddbyid = async () => {
    const docRef = await doc(db, "Add", adId)
    const docSnap = await getDoc(docRef)
    setad(docSnap.data())
    console.log(docSnap.data())
    console.log('myadddd', ad)

    showUserdata(docSnap.data().user);
  }
  const showUserdata = async (user) => {
    try {
      const result = await getuserData(user)
      console.log(result)
      setSellerdetail(result)
      console.log('seller......', sellerDetail)
    } catch (error) {
      // console.log(error.message)

    }
  }


  const getAndSetId = async () => {
    const result = await getAdById(adId);
    console.log("detail", result);
    setAddId(result.add);
    console.log("all-detail", addId);
  };

  if (!addId) {
    return (
      <div>
        <img className="myImage" src="https://i.stack.imgur.com/MnyxU.gif" />
      </div>
    );
  }

  const { title, description, brand, price, Url, location } = addId;

  return (
    <div>
      <Header />
      <Main />
      <div className="header_detail">
        <div className="content_detail">
          <div className="content_1">
            <div className="gallery">
              <div className="back_img">
                <div style={{ height: "100%", width: "100%" }}>
                  <img
                    className="img_ad"
                    src={Url}
                    width={100}
                    height={100}
                    alt="Add image"
                  />
                </div>
              </div>
            </div>
            <div className="info">
              <div className="details">
                <span className="info_title">Details</span>
                <div className="info_detail">
                  <div className="flexix">
                    <div className="flexix_1">
                      <span className="price_info">Price</span>
                      <span>{price}</span>
                    </div>
                  </div>
                  <div className="flexix">
                    <div className="flexix_1">
                      <span className="price_info">Brand</span>
                      <span>{brand}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="info_title">Description</span>
                <div className="div_text">
                  <span>{description}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content_2">
            <div className="title_detail">
              <div className="title_text">
                <div className="price_icons">
                  <div style={{ display: "flex" }}>
                    <span className="price_title">Rs {price} </span>
                  </div>
                  <div className="share_heart">
                    <div className="share_div">
                      <img
                        src="https://www.olx.com.pk/assets/iconShare_noinline.41d8fa8326fea7b27bc24d3eca8b598a.svg"
                        alt="share"
                      />
                    </div>
                    <div className="share_div">
                      <img
                        width={25}
                        height={25}
                        src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                        alt="share"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p>{title}</p>
              <div style={{ color: `rgba(0,47,52,.64)` }}>{location}</div>
            </div>
            <div className="title_detail">
              <div className="seller">Seller Discripton</div>
              <div className="user">
                <img
                  src={sellerDetail.profilePic}
                  width={60}
                  height={60}
                  alt=""
                />
                <div className="guest">{sellerDetail.name}</div>
              </div>
              <div className="chat_div">
                <button>Chat with Seller</button>
              </div>
            </div>
            <div className="title_detail">
              <div className="seller">Posted In</div>
              <div style={{ color: `rgba(0,47,52,.64)` }}>{location}</div>
              <div className="map"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
