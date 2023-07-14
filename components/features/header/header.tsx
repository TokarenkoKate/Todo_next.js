import "./header.css"
import ThemeSwitcher from "@features/theme-switcher/theme-switcher"

export default function Header() {
  return (
    <header className="header page__container">
      <div className='header__titles-group'>
        <h1 className="header__title">Todo list</h1>
        <p className="header__subtitle">Manage your tasks in the list</p>
      </div>
      <ThemeSwitcher />
    </header>
  )
}
