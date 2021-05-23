import Link from 'next/link'
import styles from './navbar.module.css'

export default function NavItem(props) {
  return (
    <Link href={props.link.url}>
      <a
        className={`${styles.navItem} ${(props.active ? styles.active : '')}`}
      >
        {props.link.title}
      </a>
    </Link>
  );
}