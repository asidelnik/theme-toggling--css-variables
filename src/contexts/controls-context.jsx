import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  isPlaying: false,
  playingTrackId: null,
  playingSpeed: 1,

  trackDuration: '0',
  currentTime: '30:00',
};

const ControlsContext = createContext();
const ControlsDispatchContext = createContext(null);

export default function ControlsProvider({ children }) {
  const [state, dispatch] = useReducer(controlsReducer, initialState);

  return (
    <ControlsContext.Provider value={state}>
      <ControlsDispatchContext.Provider value={dispatch}>
        {children}
      </ControlsDispatchContext.Provider>
    </ControlsContext.Provider>
  );
}

ControlsProvider.propsTypes = {
  children: PropTypes.node.isRequired,
};

function controlsReducer(controls, action) {
  console.log(controls, action);
  switch (action.type) {
    case 'set-is-playing': {
      return {
        ...controls,
        isPlaying: action.payload,
      };
    }
    case 'set-playing-track': {
      return {
        ...controls,
        isPlaying: true,
        playingTrackId: action.payload.id,
        trackDuration: action.payload.duration,
        currentTime: 0,
      };
    }
    case 'set-playing-speed': {
      return {
        ...controls,
        playingSpeed: action.payload,
      };
    }
    default: {
      return controls;
    }
  }
}

export function useControls() {
  return useContext(ControlsContext);
}

export function useControlsDispatch() {
  return useContext(ControlsDispatchContext);
}
