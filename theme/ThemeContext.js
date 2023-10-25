import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const [isLight, setIsLight] = useState(true);
  return (
    <ThemeContext.Provider value = {{
      isLight, setIsLight
    }}>
      {children}
    </ThemeContext.Provider>
  )

}

export {ThemeProvider, ThemeContext};