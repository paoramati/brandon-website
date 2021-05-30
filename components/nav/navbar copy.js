
import Link from 'next/link';
import styles from './navbar.module.css'
// import NavItem from './navitem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useRouter } from "next/router";

import { menuItems } from '../../lib/config/navigation'
import { isEmptyArray } from '../../lib/utils/array-utils'

import { useState } from 'react';




export default function NavBar() {

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

/*
<nav>
    <ul class="menu">
        <li class="logo"><a href="#">Creative Mind Agency</a></li>
        <li class="item"><a href="#">Home</a></li>
        <li class="item"><a href="#">About</a></li>
        <li class="item has-submenu">
            <a tabindex="0">Services</a>
            <ul class="submenu">
                <li class="subitem"><a href="#">Design</a></li>
                <li class="subitem"><a href="#">Development</a></li>
                <li class="subitem"><a href="#">SEO</a></li>
                <li class="subitem"><a href="#">Copywriting</a></li>
            </ul>
        </li>
        <li class="item has-submenu">
            <a tabindex="0">Plans</a>
            <ul class="submenu">
                <li class="subitem"><a href="#">Freelancer</a></li>
                <li class="subitem"><a href="#">Startup</a></li>
                <li class="subitem"><a href="#">Enterprise</a></li>
            </ul>
        </li>
        <li class="item"><a href="#">Blog</a></li>
        <li class="item"><a href="#">Contact</a>
        </li>
        <li class="item button"><a href="#">Log In</a></li>
        <li class="item button secondary"><a href="#">Sign Up</a></li>
        <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
</nav>
*/

function ParentMenuItem({ link, subMenuItems }) {

  const [active, setActive] = useState(false)

  function toggleItem(e) {
    console.log("AIS >  ~ file: navbar.js ~ line 72 ~ toggleItem ~ active", active)

    setActive(!active)
    // onToggle(active)
  }

  return (
  
    <Link href="#">
      {/* <li className={`${styles.item} ${styles.hasSubMenu}`}> */}
      <li
        className={`${styles.item}`}
        onClick={toggleItem}
        onKeyPress={toggleItem}
      >
        <a tabIndex="0">{link.title} <FontAwesomeIcon className={styles.subMenuIcon} icon={['fas', 'chevron-down']} /></a>
        <ul
          className={`${styles.subMenu} ${active ? styles.subMenuActive : ''}`}
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

    // <li className={`${styles.item} ${styles.hasSubMenu}`}>
    //   <a tabIndex="0">{props.link.title}</a>
    //   <ul className={styles.subMenu}>
    //     {props.subNavButtons.map((nb, i) => {
    //       return (
    //         <NavItem
    //           link={{ title: nb.title, href: nb.href }}
    //           style={styles.subItem}
    //           key={i}
    //         />
    //       )
    //     })}
    //   </ul>
    // </li>
  )
}

function MenuItem(props) {
  // console.log("AIS >  ~ file: navbar.js ~ line 74 ~ NavItem ~ props", props)
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
