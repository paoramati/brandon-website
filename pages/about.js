import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import { NAME } from '../lib/my-contstants'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <h1>About</h1>
        <div>
          <Image
            priority
            src="/images/brandon.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={NAME}
          />
          <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
        </div>
      </Layout>
    </>
  )
}