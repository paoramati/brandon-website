
import Link from 'next/link';
import styles from './navbar.module.css'
// import NavItem from './navitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useRouter } from "next/router";

import { isEmptyArray } from '../../lib/utils/array-utils'

import { useState } from 'react';


export default function NavBar({ menuItems }) {

  const [toggleActive, setToggleActive] = useState(false);
  const handleSetActive = (value) => {
    setToggleActive(!value)
  }

  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.menu} ${toggleActive ? styles.active : ''}`}>

        {/* <li className="logo"> */}
        <MenuItem
          link={{ title: 'BMP', href: '/' }}
          style={styles.logo}
        />
        {/* </li> */}

        {/* Creates a parent nav item with a recursive list of nav items, else returns a top level navitem */}
        {menuItems.map((menuItem, index) => {
          // {console.log(menuItem)}
          const isActive = router.pathname == menuItem.href;
          if (!isEmptyArray(menuItem.subMenuItems)) {
            return (
              <ParentMenuItem
                key={index}
                isActive={isActive}
                link={{ title: menuItem.title, href: menuItem.href }}
                subMenuItems={menuItem.subMenuItems}
              />
            )
          } else {
            return (
              <MenuItem
                key={index}
                link={{ title: menuItem.title, href: menuItem.href }}
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

function ParentMenuItem({ link, subMenuItems }) {

  const [active, setActive] = useState(false)

  function toggleItem(e) {
    console.log("AIS >  ~ file: navbar.js ~ line 72 ~ toggleItem ~ active", active)

    setActive(!active)
    // onToggle(active)
  }

  return (

    <Link href="#" passHref>
      <li
        // className={`${styles.item} ${active ? styles.activeSubMenu : ''}}`}
        // className={`${styles.item} ${active ? styles.activeSubMenu : ''} ${styles.hasSubMenu}}`}
        className={`${styles.item} ${active ? styles.activeSubMenu : ''}}`}
        onClick={toggleItem}
        onKeyPress={toggleItem}
      >
        <a tabIndex="0">{link.title} <FontAwesomeIcon className={styles.subMenuIcon} icon={['fas', 'chevron-down']} /></a>
        <ul
          // className={`${styles.subMenu} ${active ? styles.activeSubMenu : ''}`}
          className={`${styles.subMenu} ${active ? styles.activeSubMenu : ''}`}
        >
          {subMenuItems.map((nb, i) => {
            return <MenuItem link={{
              title: nb.title,
              href: nb.href
            }} style={styles.subItem} key={i} />;
          })}
        </ul>
      </li>
    </Link>
  )
}

function MenuItem(props) {
  // console.log("AIS >  ~ file: navbar.js ~ line 74 ~ NavItem ~ props", props)
  const itemStyle = props.style;
  return (
    <li className={`${itemStyle} ${(props.isActive ? styles.active : '')}`} key={props.index}>
      <Link href={props.link.href} passHref={true}>
        <a>
          {props.link.title}
        </a>
      </Link>
    </li >

  );
}

function ToggleButton({ initialActive, onClick }) {

  const [active, setActive] = useState(false)
  // console.log("AIS >  ~ file: navbar.js ~ line 101 ~ ToggleButton ~ activeValue, onClick ", activeValue, onClick )

  function toggleMenu(e) {

    setActive(!active)

    // console.log("AIS >  ~ file: navbar.js ~ line 103 ~ toggleMenu ~ e", e)
    // const value = e.target.value;
    // console.log("AIS >  ~ file: navbar.js ~ line 106 ~ toggleMenu ~ value", value)
    onClick(active)
  }

  return (
    <li className={styles.toggle} onClick={toggleMenu}>
      <a href="#">
        {!active ? (
          <FontAwesomeIcon className={styles.icon} icon={['fas', 'bars']} />
        ) : (
          <FontAwesomeIcon className={styles.icon} icon={['fas', 'times']} />
        )}
      </a>
    </li>
  );
}
