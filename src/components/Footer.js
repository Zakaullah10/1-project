import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Import solid phone icon

function Footer() {
  return (
    <div className="PF">
      <div className="footer">
        <div className="iconF">
          <FontAwesomeIcon className="icon1" icon={faFacebookF} />
          <FontAwesomeIcon className="icon1" icon={faTwitter} />
          <FontAwesomeIcon className="icon1" icon={faInstagram} />
          <FontAwesomeIcon className="icon1" icon={faYoutube} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="Cf1">
            <div style={{ width: "25%" }}>
              <div className="ftext">
                <h2>ABOUT US</h2>
              </div>
              <div className="ftext">
                <b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed doLorem ipsum dolor sit amet,
                  </p>
                </b>
              </div>
            </div>
            <div style={{ width: "25%" }}>
              <div className="ftext">
                <h2>Newsletter</h2>
              </div>
              <div className="finput">
                <input
                  style={{ width: "90%", height: "35px" }}
                  type="text"
                  placeholder="   ENTER YOUR EMAIL"
                ></input>
              </div>
              <div className="fbutton">
                <button
                  style={{
                    width: " 50%",
                    height: "40px",
                    marginTop: " 20px",
                    color: "white",
                    backgroundColor: " #F44336",
                    border: "none",
                  }}
                >
                  SUSCRIBE
                </button>
              </div>
            </div>
            <div style={{ width: "25%" }}>
              <div className="ftext">
                <h2>NEED HELP</h2>
              </div>
              <div className="ftext">
                <b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed doLorem ipsum dolor sit amet,
                  </p>
                </b>
              </div>
            </div>
            <div style={{ width: "25%" }}>
              <div className="ftext">
                <h2>CONTACT US</h2>
              </div>
              <div>
                <div
                  style={{
                    display: " flex",
                    /* justify-content: center; */
                    alignItems: "center",
                    gap: "15px",
                    marginTop: "-15px"
                  }}
                >
                  <FontAwesomeIcon className="icon2" icon={faMapMarkerAlt} />
                  <div>
                    <p className="ftext">Gb road 123 london Uk</p>
                  </div>
                </div>

                <div  style={{
                    display: " flex",
                    /* justify-content: center; */
                    alignItems: "center",
                    gap: "15px",
                    marginTop: "-15px"
                  }}>
                  <FontAwesomeIcon
                    className="icon2"
                    icon={faPhoneAlt}
                    flip="horizontal"
                  />
                  <div>
                    <p className="ftext">+01 12345678901</p>
                  </div>
                </div> 
                <div  style={{
                    display: " flex",
                    /* justify-content: center; */
                    alignItems: "center",
                    gap: "15px",
                    marginTop: "-15px"
                  }} >
                  <FontAwesomeIcon className="icon2" icon={faEnvelope} />
                  <div>
                    <p className="ftext">demo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div>
          <h2 className="ftext">
            © 2024 All Rights Reserved By Free Html Templates
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
