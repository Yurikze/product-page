import classes from './Header.module.scss'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Site logo" />
    </header>
  )
}

export default Header