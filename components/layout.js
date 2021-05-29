import { NAME, SITE_TITLE } from '../lib/my-contstants'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '/layout.module.css'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './nav/navbar'
import MyProfileIcons from '../components/myprofileicons'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <NavBar />

      <div
        className={styles.container}>

        <header>
          <div className="header">
          </div>
          {home ? (
            <div className={styles.header}>
            </div>
          ) : (
            <div className={styles.header}>
            </div>
          )}
        </header>  {/* End header */}



        {/* Main content */}
        <main>{children}</main>

        {/* Back to home button */}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <footer className="footer">
          <MyProfileIcons></MyProfileIcons>
        </footer>
      </div>
    </>
  )
}