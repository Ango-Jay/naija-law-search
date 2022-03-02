import React from "react";

const Button: React.FC = () => {
  return (
    <div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        {" "}
        Search{" "}
      </button>
    </div>
  );
};

export default Button;
