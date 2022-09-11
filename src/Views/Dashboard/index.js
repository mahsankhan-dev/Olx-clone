import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Main from "../../Component/Main/Main";
import Footer from "../../Component/Footer/Footer";
import { getAdds, getSearchAdd } from "../../config";
import { useNavigate } from "react-router-dom";
import Banner from "../../Component/Banner/banner";
import "./dashboard.css";

function Dashboard(props) {
  const [render, setRender] = useState();
  const [search, setSearch] = useState();
  const [showSearchAdd, setShowSearchAdd] = useState([]);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    var data = myAllAdss();
  }, []);

  const myAllAdss = async () => {
    var result = await getAdds();
    setRender(result);
  };

  const searchAdd = async () => {
    const res = await getSearchAdd(search);
    setShowSearchAdd(res);
  };
  useEffect(() => {
    if (search) searchAdd();
  }, [search]);

  const isEmpty = () => search && showSearchAdd && !showSearchAdd.length;
  const NoResult = () => <div className="no_result">No Results Found!</div>



  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Main />
      <Banner />


      {/* ( Searching Item Render Start )  */}

      {isEmpty() && <NoResult />}





      {search ? (
        <>
          <div>
            <h4 style={{ fontFamile: 'sans-serif' }}>Search for {search}</h4>
          </div>

          <div className="header">
            {showSearchAdd.map((item) => {
              return (
                <div className="allcard" style={{ margin: 'auto' }}>
                  <div className="card_img">
                    <img
                      src={item.add.Url}
                      className="img-card"
                      width={100}
                      height={100}
                      alt="Images"
                    />
                  </div>
                  <div className="detail">
                    <div>
                      {item.add.title}
                      <div className="heart">
                        <img
                          src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="rs">
                      <b> RS {item.add.price} </b>
                    </div>
                    <div className="location">{item.add.location}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </>
      ) : (
        <></>
      )}

      {/* ( Searching Item Render Start )  */}

      {/* ( All Adds Render Start ) */}

      {render ? (
        <>
          <h2 className="my-h2">Fresh Recomendation</h2>
          <div className="header">
            {render.map((item) => {
              return (
                <div
                  className="allcard"
                  onClick={() => navigate(`/detail/${item.id}`)}
                >
                  <div className="card_img">
                    <img
                      src={item.add.Url}
                      className="img-card"
                      width={100}
                      height={100}
                      alt="bikeimage"
                    />
                  </div>
                  <div className="detail">
                    <div>
                      {item.add.title}
                      <div className="heart">
                        <img
                          src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="rs">
                      <b> RS {item.add.price} </b>
                    </div>

                    <div className="location">{item.add.location}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}

      {/* ( All Adds Render End ) */}

      <Footer />
    </>
  );
}

export default Dashboard;
