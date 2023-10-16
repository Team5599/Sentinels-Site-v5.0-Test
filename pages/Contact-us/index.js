import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Team</title>
      <link rel="icon" type="image/x-icon" href="/new_favicon.ico"/>
    </Head>
    <nav class="navbar">
      <li id="home"><Link href='/'>The Sentinels</Link></li>
      <li id="listright" class="list"><Link href='/Donate' ><p>Donate</p></Link></li>
      <li id="listright" class="list"><Link href='/Team'><p>Team</p></Link></li>
      <li id="listright" class="list"><Link href='/Robots'><p>Robots</p></Link></li>
      <li id="listright" class="list"><Link href='/Blogs'><p>Blogs</p></Link></li>
      <li id="listright" class="list"><Link href='/Sponsors'><p>Sponsors</p></Link></li>
      <li id="listright" class="list"><Link href='/Resources'><p>Resources</p></Link></li>
      <li id="listright" class="list"><Link href='/Contact us'><p>Contact Us</p></Link></li>
    </nav>
    <main>

    </main>
    </>
  )}