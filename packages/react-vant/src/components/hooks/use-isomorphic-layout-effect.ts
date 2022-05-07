import React from "react";
import { inBrowser } from "../utils";

export const useIsomorphicLayoutEffect = inBrowser ? React.useLayoutEffect : React.useEffect;

export default useIsomorphicLayoutEffect;
