import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
//import Router from 'next/Router'

export default function Home() {
  return (
    <>
    <Head>
      <title>Sentinels | Home</title>
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
      <li id="listright" class="list"><Link href='/Contact-us'><p>Contact Us</p></Link></li>
    </nav>
    <main>
      <body class= "homebody">
        <div class="img">
          <Image
            src="/_DSC2042.JPG"
            // src="/photoex.JPG"
            width={1000}
            height={500}
          />
        </div>

        <h1 class="Heading">News</h1>
        
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        {/* <div class="firstlogo">
          <Image
            src="/first.png"
            width={400}
            height={400}
          />
        </div> */}

        {/* <div class="sponsors">
          <h1>Our sponsors</h1>

          <h2>We have none</h2>
        </div> */}


        {/* <div class="calender"></div> */}

        </body>

        <footer>
          <div>
            © The Sentinels 2023
          </div>
          <div class="socials">

          </div>
        </footer>
      </main>
    </>
  )
}

