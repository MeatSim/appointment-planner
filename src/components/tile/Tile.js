import React from "react";

export const Tile = () => {
  const values = Object.values(props.contact);
  const tile = () => {
    for (let i; i < values.length; i++) {
      if (i === 0) {
        <p className='tile-title' key={values[i]}>{props.contact[i]}</p>
      } else {
        <p className="tile" key={values[i]}>{[props.contact[i]]}</p>
      }
    }
  }

  return (
    <div className="tile-container">
      {tile}
    </div>
  );
}
