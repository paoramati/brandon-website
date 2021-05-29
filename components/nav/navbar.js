
import Link from 'next/link';
import styles from './navbar.module.css'
// import NavItem from './navitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useRouter } from "next/router";

import { navButtons } from '../../lib/config/navigation'
import { isEmptyArray } from '../../lib/utils/array-utils'

import { useState } from 'react';




export default function NavBar() {

  const [active, setActive] = useState(true);
  const handleSetActive = (value) => {
    setActive(!value)
  }

  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.menu} ${active ? styles.active : ''}`}>

        {/* <li className="logo"> */}
        <NavItem
          link={{ title: 'LOGO', href: '/' }}
          style={styles.logo}
        />
        {/* </li> */}

        {/* Creates a parent nav item with a recursive list of nav items, else returns a top level navitem */}
        {navButtons.map((navButton, index) => {
          const isActive = router.pathname == navButton.href;
          if (!isEmptyArray(navButton.subNavButtons)) {
            return (
              <ParentNavItem
                key={index}
                isActive={isActive}
                link={{ title: navButton.title, href: navButton.href }}
                subNavButtons={navButton.subNavButtons}
              />
            )
          } else {
            return (
              <NavItem
                key={index}
                link={{ title: navButton.title, href: navButton.href }}
                active={isActive}
                style={styles.item}
              />
            )
          }
        })}

        <ToggleButton onClick={handleSetActive}></ToggleButton>

      </ul>
    </nav>
  )
}

function ParentNavItem(props) {
  return (
    <li className={`${styles.item} ${styles.hasSubMenu}`}>
      <a tabIndex="0">{props.link.title}</a>
      <ul className={styles.subMenu}>
        {props.subNavButtons.map((nb, i) => {
          return (
            <NavItem
              link={{ title: nb.title, href: nb.href }}
              style={styles.subItem}
              key={i}
            />
          )
        })}
      </ul>
    </li>
  )
}

function NavItem(props) {
  console.log("AIS >  ~ file: navbar.js ~ line 74 ~ NavItem ~ props", props)
  const itemStyle = props.style;
  return (
    <Link href={props.link.href}>
      <li className={`${itemStyle} ${(props.isActive ? styles.active : '')}`} key={props.index}>
        <a>
          {props.link.title}
        </a>
      </li>
    </Link>
  );
}

function ToggleButton({ onClick }) {

  const [active, setActive] = useState(false)
// console.log("AIS >  ~ file: navbar.js ~ line 101 ~ ToggleButton ~ activeValue, onClick ", activeValue, onClick )

  function toggleMenu(e) {

    setActive(!active)

    // console.log("AIS >  ~ file: navbar.js ~ line 103 ~ toggleMenu ~ e", e)
    const value = e.target.value;
    // console.log("AIS >  ~ file: navbar.js ~ line 106 ~ toggleMenu ~ value", value)
    onClick(active)
  }

  return (
    <li className={styles.toggle} onClick={toggleMenu}>
      <a href="#">
        {active ? (
          <FontAwesomeIcon className={styles.icon} icon={['fas', 'bars']} />
        ) : (
          <FontAwesomeIcon className={styles.icon} icon={['fas', 'times']} />
        )}
      </a>
    </li>
  );
}
