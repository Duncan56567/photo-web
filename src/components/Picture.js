import React from "react";
import { ReactComponent as Download } from "../images/download.svg";

const Picture = ({ key, data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <a target="_blank" href={data.src.large}>
          <img src={data.src.large} alt="" />
        </a>
      </div>
      <div className="info">
        <a className="photographer">{data.photographer}</a>
        <div className="downloadButton">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Picture;
