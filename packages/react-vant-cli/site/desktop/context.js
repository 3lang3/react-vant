import React from 'react';

export const SimulatorContext = React.createContext({
  visible: false,
  toggleSimulator: () => null,
});

export default SimulatorContext;
