// import Link from 'next/link';
import styles from './navbar.module.css'
import NavItem from './navitem'

import { useRouter } from "next/router";

export default function NavBar({ links }) {
  const router = useRouter();
  return (
    <nav className={styles.navContainer}>
      {links.map((link, index) => {
        const isActive = router.pathname == link.url;
        return (
          <NavItem
            key={index}
            link={link}
            active={isActive}
          />
        )
      })}
    </nav>
  )
}