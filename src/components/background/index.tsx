import React, { memo } from "react";
import "./styles.css";

const BACKGROUND_ITEMS = 7;

const Background = () => {
  return (
    <ul className="background" aria-hidden="true">
      {Array.from({ length: BACKGROUND_ITEMS }, (_, i) => (
        <li key={i} />
      ))}
    </ul>
  );
};

export default memo(Background);