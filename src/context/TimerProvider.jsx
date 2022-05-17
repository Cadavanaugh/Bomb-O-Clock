import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

export const TimerContext = createContext();

export default function TimerProvider({ children }) {
  const [time, setTime] = useState('000000');

  const store = useMemo(() => ({
    time, setTime,
  }), [time, setTime]);

  return (
    <TimerContext.Provider value={store}>
      {children}
    </TimerContext.Provider>
  );
}

TimerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};