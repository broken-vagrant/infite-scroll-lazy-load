import { Link } from "react-router-dom"
import classes from "./index.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/">
          <h1>Brands</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
