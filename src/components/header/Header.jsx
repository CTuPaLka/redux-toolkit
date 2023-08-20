import { BsFillBagHeartFill } from "react-icons/bs"
import css from './Header.module.css'
import { useFavorites } from "../../hooks/useFavorites"

const Header = () => {

    const favorites = useFavorites()

  return (
    <header className={css.header}>
      <BsFillBagHeartFill style={{fontSize: '20px'}}/>
      <span>{favorites.length}</span>
      </header>
  )
}

export default Header