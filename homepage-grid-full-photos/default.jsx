import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const GridSection = ({ children }) => {
  const one = children[0];
  const two = children[1];
  const three = children[2];
  const four = children[3];
  const five = children[4];
  const six = children[5];
  const seven = children[6];
  const eight = children[7];
  const nine = children[8];
  const ten = children[9];
  const eleven = children[10];
  const twelve = children[11];
  return (
    <div className="row grid-section">
      <div className="col-12 col-md-4 col-lg-3 top-story-left vertical-separator-a">
        <div className="hidden-md-up">{four}</div>
        <div className="grid-ad-container-1">{two}</div>
        <div className="first-story">{one}</div>
        <div>{three}</div>
      </div>
      <div className="col-12 col-md-8 col-lg-5 middle-story vertical-separator-b move-down-mobile">
        <div className="hidden-md-down">{four}</div>
        <div>{five}</div>
        <div>{six}</div>
        <div>{seven}</div>
      </div>
      <div
        className="col-12 col-md-12 col-lg-4 top-story-right"
        style={{ marginTop: "16px" }}
      >
        <div className="col-md-12 grid-ad-container-2 move-down-tablet">
          <div>{eight}</div>
        </div>
        <div style={{ marginTop: "16px" }}>{nine}</div>
        <div>{ten}</div>
        <div>{eleven}</div>
        <div>{twelve}</div>
      </div>
    </div>
  );
};

GridSection.label = "Grid 8";

GridSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default GridSection;
