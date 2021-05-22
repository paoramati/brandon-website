// import Link from 'next/link';
import styles from './navbar.module.css'
import NavItem from './navitem'

export default function NavBar({ links }) {
  return (
    <nav className={styles.navContainer}>
      {links.map((link, index) => {
        return <NavItem key={index} link={link}></NavItem>
      })}
    </nav>
  )
}