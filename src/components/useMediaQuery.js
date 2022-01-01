import { useState } from "react";

/**
 *
 * @param {Number} width Max Width
 */
function useMediaQuery(width) {
  let w = window.innerWidth;
  const [qureys, setQuerys] = useState({ w: 0 });
  setQuerys({ w: w });
  return qureys.w > width ? true : false;
}

export default useMediaQuery;