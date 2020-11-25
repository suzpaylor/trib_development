/* eslint-disable react/jsx-fragments */
/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Homepage = (props) => {
  const { children } = props;

  return (
    <div className="homepage-layout-1">
      <div id="topAd" className="ad hidden-sm-down">
        {children[0]}
      </div>
      <header id="navbar">{children[1]}</header>
      <div className="scrollable-content">
        <section className="hidden-lg-down">{children[2]}</section>
        <section className="container v-space">{children[3]}</section>
        <section className="container v-space">{children[4]}</section>
        <section className="ad">{children[5]}</section>
        <section className="container column-section">{children[6]}</section>
        <section className="container v-space column-section">
          {children[7]}
        </section>
        <section className="container v-space mobile-ads">
          {children[8]}
        </section>
        <footer>{children[9]}</footer>
      </div>
    </div>
  );
};

Homepage.sections = [
  "Top Ad",
  "Header Navigation",
  "Social Media + Masthead",
  "Top Stories",
  "3 Stories Row",
  "Ad",
  "Story Columns",
  "Bagley",
  "Dynamic Ads",
  "Footer",
];

Homepage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node])).isRequired,
};

export default Homepage;
