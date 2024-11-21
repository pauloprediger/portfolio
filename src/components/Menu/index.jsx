/* eslint-disable react/jsx-filename-extensions */
import styles from './Menu.module.css';
import MenuLink from './MenuLink';

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to= "/">
            Início
        </MenuLink>
        <MenuLink to = "/aboutMe"> 
            Sobre Mim
        </MenuLink>
      </nav>
    </header>
  );
}
