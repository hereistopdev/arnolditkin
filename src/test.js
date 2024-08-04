import React from "react";

const YourComponent = () => {
  return (
    <React.Fragment>
      <svg style={{ width: 0, height: 0 }}>
        <defs>
          <clipPath id="AIclip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00067,0.00115)"
              d="M1422.2,128.1L1492,0h-445.1l69.7,128.1V556l171,308.5H1492l-69.8-128.1V128.1z M735.2,0H425.6l55,99.3
                L115.2,758.8L0,864.6h315.5l-76.4-113.1l73.8-133.2h455.3l72.6,131l-77.9,115.3h451.5L735.2,0z M371.1,513.3l169.5-305.8L710,513.3
                H371.1z"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </React.Fragment>
  );
};

export default YourComponent;
