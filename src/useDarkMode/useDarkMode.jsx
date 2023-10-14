import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')      
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    const kolTheme = localStorage.getItem('theme')
    if(kolTheme) {
      setTheme(kolTheme)
    }
  }, [])



  return [theme, toggleTheme];
};

export default useDarkMode;
