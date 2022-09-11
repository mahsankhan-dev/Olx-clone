import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Main from "../../Component/Main/Main";
import Footer from "../../Component/Footer/Footer";
import { getUserInfo } from "../../config";
import "./profile.css";
import { useSelector } from "react-redux";

function Profile(props) {
  const [userData, setUserData] = useState("");
  const user = useSelector((state) => state.reducer.user);
  console.log("Profile user", user);
  // console.log('Profile image', user.url)

  const receiveUserData = async () => {
    const result = await getUserInfo();
    console.log("User Data ", result);
    setUserData(result);
    console.log("userDta", userData);
  };

  useEffect(() => {
    const res = receiveUserData();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <>
        {user ? (
          <>
            {/* <h1>Name Reducer : {user && user.name}</h1>
            <img src={user && user.pic} /> */}
            <div className="prof">
              <>
                <div className="meimg">
                  {" "}
                  <img src={user && user.pic} />{" "}
                </div>
                <div className="center">
                  {" "}
                  <b>Name :</b> <label>{user && user.name}</label>{" "}
                </div>
                <div className="center">
                  {" "}
                  <b>Email :</b> <label>{user && user.email}</label>{" "}
                </div>
              </>
            </div>
          </>
        ) : (
          <>
            {userData ? (
              <div className="prof">
                {userData.map((e) => {
                  return (
                    <>
                      <div className="meimg">
                        {" "}
                        <img src={e.profilePic} />{" "}
                      </div>
                      <div className="center">
                        {" "}
                        <b>Name :</b> <label>{e.name}</label>{" "}
                      </div>
                      <div className="center">
                        {" "}
                        <b>Email :</b> <label>{e.email}</label>{" "}
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </>
      <Footer />
    </>
  );
}

export default Profile;
