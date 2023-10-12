import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')      
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const hameyeTheme = localStorage.getItem('theme')
    if (hameyeTheme) {
      setTheme(hameyeTheme);
    }
  }, [])

  return [theme, toggleTheme];
};

export default useDarkMode;
