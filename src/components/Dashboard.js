import React from "react";
import "../Dashboard.css";
import Logo from "../assets/logo.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import graph1 from "../assets/graph1.svg";
import GraphCard from "./GraphCard";
import PercentageCards from "./PercentageCards";
import RiskLevelCard from "./RiskLevelCard";
import PieChart1 from "../assets/PieChart1.svg";
import PieChart2 from "../assets/PieChart2.svg";
import PieChart3 from "../assets/PieChart3.svg";
import PieChart4 from "../assets/PieChart4.svg";
import PieChart5 from "../assets/PieChart5.svg";
import PieChart6 from "../assets/PieChart6.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <div className="logo-img">
          <img src={Logo} alt="" />
        </div>
        <br />
        <div className="dashboard-navbar">
          <div className="navbar">
            <p>Overview</p>
            <p>
            <a href="/SocialWorkers">Social Workers</a>
            </p>
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
            <h2>Welcome back, Amy</h2>
            <p>Track, manage and review areas for client case improvement.</p>
          </div>
          <div className="left-side">
            <div className="date-section">
              {/* <p>Jan 6, 2022 – Jan 13, 2022</p> */}
              <input className="date-input" type="date" />
            </div>
            <div className="export-section">
              <p className="export">Export Data</p>
            </div>
          </div>
        </div>
        <br />
        <div className="graph-cards">
          <GraphCard
            heading="Overall Satisfaction"
            image={settingsIcon}
            count="53%"
            comparison="3% vs last month"
            graphImage={graph1}
          />
          <GraphCard
            heading="Patient Confidence"
            image={settingsIcon}
            count="Average"
            comparison="10% vs last month"
            graphImage={graph1}
          />
          <GraphCard
            heading="Resource to management care"
            image={settingsIcon}
            count="38%"
            comparison="20% vs last month"
            graphImage={graph1}
          />
        </div>
        <br />
        <br />
        <div className="percentage-cards">
          <PercentageCards
            heading="Discuss All Medications"
            percentage="52%"
            comparison="10%"
          />

          <PercentageCards
            heading="Discuss Medication Usage"
            percentage="18%"
            comparison="12%"
          />

          <PercentageCards
            heading="Discuss Medication Purpose"
            percentage="40%"
            comparison="2%"
          />

          <PercentageCards
            heading="Discuss Side Effects of Medications"
            percentage="22%"
            comparison="2%"
          />
        </div>
        <br />
        <br />
        <div className="risk-level-cards">
          <div className="risk-level-card-content">
          <h4>SDOH Risk Levels</h4>
          <br />
          
          <div className="risk-cards">
            <RiskLevelCard heading="Economic Stability" image={PieChart1} />
            <RiskLevelCard heading="Neighborhood" image={PieChart2} />
            <RiskLevelCard heading="Education" image={PieChart3} />
            <RiskLevelCard heading="Food" image={PieChart4} />
            <RiskLevelCard heading="Community & Social" image={PieChart5} />
            <RiskLevelCard heading="Healthcare" image={PieChart6} />
          </div>
          <br />
          <br />
          <div className="pieChart-description">
            <div className="description">
              <div className="ash">
                <p>Unknown</p>
              </div>
              <div className="blue">
                <p>Low/No Risk</p>
              </div>
              <div className="yellow">
                <p>Medium Risk</p>
              </div>
              <div className="red">
                <p>High Risk</p>
              </div>
            </div>
          </div>
          <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
