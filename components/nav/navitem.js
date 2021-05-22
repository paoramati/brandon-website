import Link from 'next/link'
import styles from './navitem.module.css'

export default function NavItem(props) {
  return (<Link href={props.link.url}>
    <a className={styles.navItem}>{props.link.title}</a>
  </Link>);
}