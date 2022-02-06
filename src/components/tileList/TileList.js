import React from "react";

export const TileList = () => {
  return (
    <div>
      {props.contacts.forEach((contact) => {
        return <Tile contact={contact} />
      })}
    </div>
  );
};
