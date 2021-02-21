const useThemeSwitcher = () => (themeName) => {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${themeName}`);
};

export default useThemeSwitcher;
