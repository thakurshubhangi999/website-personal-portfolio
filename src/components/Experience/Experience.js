import React from "react";
import "./Experience.css";
import history from "../../data/history.json";
import infosys from "./infosys.png";
import aris from "./aris.png";

// Function to get the image based on the organization name
const getOrganizationImage = (organisation) => {
  switch (organisation) {
    case "Aris Investing":
      return aris;
    case "Infosys Ltd.":
      return infosys;
    default:
      return "";
  }
};

export const Experience = () => {
  return (
    <section className="exp-container" id="experience">
      <h2 className="exp-title">Experience</h2>
      <div className="exp-content">
        <ul className="history">
          {history.map((historyItem, id) => (
            <li key={id} className="historyItem">
              <img
                src={getOrganizationImage(historyItem.organisation)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className="historyItemDetails">
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
