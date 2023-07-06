import React from "react";
import "../Dashboard.css";
import "../SocialWorkers.css";
import Logo from "../assets/logo.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import refreshButton from "../assets/RefreshButtonImg.svg";
import deleteButton from "../assets/DeleteButtonImg.svg";
import progressBar from "../assets/Progress bar.svg";
import { data } from "../data";
import { useNavigate } from "react-router-dom";

const SocialWorkers = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/NewSocialWorker");
  };
  return (
    <div className="socialWorkers-container">
      <div className="socialWorker-box">
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
            <h2 className="social-worker-heading">Social Workers</h2>
            <p>Add, Edit and Manage</p>
          </div>
          <div className="left-side">
            <button className="add-new" onClick={handlePage}>
              + Add Social Worker
            </button>
          </div>
        </div>
        <br />
        <div className="details-section">
          <div className="detail-heading">
            <h4>Details</h4>
          </div>
          <div className="settingIcon">
            <img src={settingsIcon} alt="" />
          </div>
        </div>
        <hr />
        <br />
        <div className="button-section">
          <div className="left-section">
            <button>View All</button>
            <button>Active</button>
            <button>Inactive</button>
          </div>
          <div className="right-section">
            <div className="search-bar">
              <input
                className="search-input"
                type="text"
                name=""
                id=""
                placeholder="search"
              />
            </div>
            <button>Filters</button>
          </div>
        </div>
<br />
        <table className="table-container">
          <div className="table-content">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Cases</th>
              <th>Hospitals</th>
              <th>Location</th>
              <th>Clinic</th>
              <th>Readmission Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>
                  <p>{item.name}</p>
                  {/* <p>{item.email}</p> */}
                </td>
                <td>{item.status}</td>
                <td>{item.cases}</td>
                <td>{item.hospitals}</td>
                <td>{item.locations}</td>
                <td>{item.Clinic}</td>
                <td>
                  <img src={progressBar} alt="" />
                </td>
                <td className="actions">
                  <div>
                    <img src={refreshButton} alt="" />
                  </div>
                  <div>
                    <img src={deleteButton} alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          </div>
        </table>

        <br />

        <div className="foot">
          <div className="page-number">
            <p>Page 1of 10</p>
          </div>
          <div className="prev-next-buttons">
            <button>Prev</button>
            <button>Next</button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default SocialWorkers;
