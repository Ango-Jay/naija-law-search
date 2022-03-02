import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      style={{ height: "80vh",display:"flex", justifyContent: "center", alignItems: "center" }}
    >
      <div
        style={{ display: "flex", margin: "0 auto" }}
        className="preloader-wrapper big active"
      >
        <div
          style={{ borderColor: "#331d5a" }}
          className="spinner-layer spinner-blue-only"
        >
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
