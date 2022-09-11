import React from "react";
import "./footer.css";

function Footer() {
  return (
    <table
      style={{
        border: "1px solid white",
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <tbody>
        <tr
          style={{
            backgroundColor: "#DCDCDC",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          <td>
            <ul>
              <li id="ftli">
                <h4>POPULAR CATEGORIES</h4>
              </li>
              <li id="ftli">Cars</li>
              <li id="ftli">Flats for rent</li>
              <li id="ftli">Jobs</li>
              <li id="ftli">Mobile Phones</li>
            </ul>
          </td>
          <td>
            <ul>
              <li id="ftli">
                <h4>TRENDING SEARCHES</h4>
              </li>
              <li id="ftli">Bikes</li>
              <li id="ftli">Watches</li>
              <li id="ftli">Books</li>
              <li id="ftli">Dogs</li>
            </ul>
          </td>
          <td>
            <ul>
              <li id="ftli">
                <h4>ABOUT US</h4>
              </li>
              <li id="ftli">About OLX </li>
              <li id="ftli">OLX Blog</li>
              <li id="ftli">Contact Us</li>
              <li id="ftli">OLX for Businesses</li>
            </ul>
          </td>
          <td>
            <ul>
              <li id="ftli">
                <h4>OLX</h4>
              </li>
              <li id="ftli">Help</li>
              <li id="ftli">Sitemap</li>
              <li id="ftli">Legal & Privacy information</li>
              <li id="ftli" style={{ color: "#DCDCDC" }}>
                1
              </li>
            </ul>
          </td>
          <td colSpan="2">
            <ul>
              <li id="ftli">
                <h4>Follow Us</h4>
              </li>
              <li id="ftli">Facebbok</li>
              <li id="ftli">Youtube</li>
              <li id="ftli">Twitter</li>
            </ul>
          </td>
        </tr>
        <tr
          style={{
            backgroundColor: "#002f34",
            color: "white",
            borderTop: "10px solid #002f34",
            borderBottom: "10px solid #002f34",
            fontSize: "small",
          }}
        >
          <td colSpan="2"></td>
          <td colSpan="2"></td>
          <td colSpan="2" style={{ paddingRight: "60px" }}>
            Free Classifieds in Pakistan. © 2006-2020 OLX
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Footer;
