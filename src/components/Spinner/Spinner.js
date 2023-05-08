import React from "react";
import PropTypes from "prop-types";
import { HashLoader } from "react-spinners";

function Spinner(props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <HashLoader color="#36d7b7" />;
    </div>
  );
}

Spinner.propTypes = {};

export default Spinner;
