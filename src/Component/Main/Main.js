import React from 'react'
import './main.css'
import Banner from '../Banner/banner'


function Main() {
  return (
    <>
      <div className="bannerParentDiv">
        <div className="bannerChildDiv">
          <div className="menuBar">
            <div className="categoryMenu">
              <span>ALL CATEGORIES</span>
            </div>
            <div className="otherQuickOptions">
              <span> Mobile Phones</span>
              <span>Cars</span>
              <span>Motorcycles</span>
              <span>Houses</span>
              <span>TV - Video - Audio</span>
              <span>Tablets</span>
              <span>Land & Plots</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main