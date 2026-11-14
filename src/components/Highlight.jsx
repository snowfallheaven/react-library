import React from "react";

const Hightlight = ({ icon, title, para }) => {
  return (
    <div className="hightlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  )
}

export default Highlight;