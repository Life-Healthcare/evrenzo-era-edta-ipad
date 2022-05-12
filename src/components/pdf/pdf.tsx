import React from "react";

export default function Pdf() {
    const pages = 4;
    const prefix = "./assets/pdf";
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        {Array.from(Array(pages)).map((_, index) => {
          const page = index + 1;
          return (
            <img
              key={page}
              src={`${prefix}/${page}.jpg`}
              style={{ display: "block", width: "100%" }}
              loading="lazy"
            />
          );
        })}
      </div>
    );
  }
  