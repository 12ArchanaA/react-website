import React from "react";
import Logo from "../assets/logo.svg";
import "../Dashboard.css";
import "../NewSocialWorker.css";
import ProfileIcon from "../assets/ProfileIcon.svg";

const NewSocialWorker = () => {
  return (
    <div className="new-socialWorker">
      <div className="new-socialWorker-box">
        <div className="logo-img">
          <img src={Logo} alt="" />
        </div>
        <br />
        <div className="dashboard-navbar">
          <div className="navbar">
            <p>Overview</p>
            <p>Social Workers</p>
            <p>Clients</p>
            <p>Reporting</p>
            <p>Resource Management</p>
          </div>
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              name=""
              id=""
              placeholder="search"
            />
          </div>
        </div>
        <br />
        <div className="heading-part">
          <div className="heading">
            <h2>New Social Worker</h2>
          </div>
        </div>
        <div className="details-password">
          <p>Details</p>
          <p>Password</p>
        </div>
        <br />
        <div className="personal-information-box">
          <div className="personal-info container">
            <div className="personal-information">
              <div className="personal-information-heading">
                <h2>Personal Information</h2>
                <p>Update your photo and personal details here.</p>
              </div>
              <div className="action">
                <button className="cancel-button">Cancel</button>
                <button className="save-button">Save</button>
              </div>
            </div>

            <div className="form">
              <p className="name-style">
                <div className="name-label">
                  <label htmlFor="Name">Name</label>
                </div>
                <div className="full-name">
                  <input className="name-input" type="text" />
                  <input className="name-input" type="text" />
                </div>
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="email">Eamil</label>
                <input className="form-input" type="email" name="" id="" />
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="phone-number">Phone-Number</label>
                <input className="form-input" type="number" name="" id="" />
              </p>
              <br />
              <hr />
              <p className="form-para">
                <div>
                  <label htmlFor="photo">Your photo</label>
                </div>
                <div className="uploaded-photo">
                  <img src={ProfileIcon} alt="" />
                  <p>Click to upload or drag and drop</p>
                  <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
                {/* <p>This will be displayed on your profile</p> */}
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="location">Location</label>
                <input className="form-input" name="location" id=""></input>
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="hospital">Hospital</label>
                <input className="form-input" name="hospital" id=""></input>
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="assigned department">Assigned Department</label>
                <input className="form-input" name="assigned department" id=""></input>
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="unit">Unit</label>
                <input className="form-input" name="unit" id=""></input>
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="badge number">Badge Number</label>
                <input className="form-input" type="text" />
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="practice NPI">Practice NPI</label>
                <input className="form-input" type="text" />
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="practice CAQH CMS number">
                  Practice CAQH CMS Number
                </label>
                <input className="form-input" type="text" />
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="individual NPI">
                  individual NPI(if applicable)
                </label>
                <input className="form-input" type="text" />
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="individual CAQH">
                  individual CAQH(if applicable)
                </label>
                <input className="form-input" type="text" />
              </p>
              <br />
              <hr />
              <p className="form-para">
                <label htmlFor="assigned credentials">
                  Assigned Credentials
                </label>
                <input className="form-input" type="text" />
              </p>
              <br />
              <hr />
            </div>
            <br />
            <hr />
            <br />
            <div className="footer-action-buttons">
              <button className="cancel-button">Cancel</button>
              <button className="save-button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSocialWorker;
