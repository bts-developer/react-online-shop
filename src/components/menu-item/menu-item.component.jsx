import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ key, title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`}>
    <div
      key={key}
      className="background-image"
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
