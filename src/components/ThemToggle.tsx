
const ThemToggle = () => {
  return (
    <div>
      <label className="relative flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="sr-only peer" aria-label="light mode is the active theme" />
        <div className="w-9 h-5 bg-color-12 peer-focus:outline-none peer-focus:ring-color-1 dark:peer-focus:ring-color-9 peer-focus-visible:ring-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-color-8 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-color-8 after:border-color-8 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-color-9 peer-checked:bg-color-9"></div>
      </label>
    </div>
  )
}

export default ThemToggle