import React from "react";
import "./style.scss";

interface Props {
  title: string;
  description: string;
  href: string;
}

const vodBlock: React.FC<Props> = ({ title, description, href }) => {
  return (
    <div className="vod-block" onClick={() => (document.location.href = href)}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default vodBlock;
