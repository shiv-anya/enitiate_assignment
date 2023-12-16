import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
const StatusMessage = ({ message, type }) => {
  const [isClose, setIsClose] = useState(false);
  let color = "";
  switch (type) {
    case "warning": {
      color = "rgb(253 224 71)";
      break;
    }
    case "success": {
      color = "rgb(190 242 100)";
      break;
    }
    default:
      color = "rgb(252 165 165)";
  }
  useEffect(() => {
    setTimeout(() => {
      setIsClose(true);
    }, 3000);
  }, []);
  const closeHandler = () => {
    return setIsClose(true);
  };
  return (
    <>
      {!isClose && (
        <div
          className={`fixed right-8 top-8 flex justify-between items-center rounded-[5px] h-[50px]`}
          style={{ backgroundColor: color }}
        >
          <div className="w-auto px-3">{message}</div>
          <button
            onClick={closeHandler}
            className={`rounded-r-[5px] h-full p-3`}
          >
            <FiX />
          </button>
        </div>
      )}
    </>
  );
};

export default StatusMessage;
