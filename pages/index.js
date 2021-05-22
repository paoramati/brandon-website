import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {SITE_TITLE} from '../lib/my-contstants'

export default function Home() {
  return (
    <Layout home={true}> {/* 'home' attribute is a boolean, and can be shortened to just it's name */}
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Brandon. I'm a software developer, and I like posting info dumps about how I solve problems. Hopefully that might be helpful to you.</p>
        <p>
         <a href="https://github.com/paoramati" target="_blank">My GitHub</a>
        </p>
        <p>
         <a href="https://twitter.com/Brand_On_Jitsu" target="_blank">My Twitter</a>
        </p>
      </section>
    </Layout>
  )
}
