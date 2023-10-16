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
      <title>Sentinels</title>
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

        <h1 class="Heading">Robots</h1>
          
        {/* add more than one picture for each robot, instead of having 1 for now */}
        <div class="img">
          <figure>
            <Image
            src
            width={1000}
            height={500}
            />
            <figcaption>
                2023
            </figcaption>
          </figure>
        </div>

        <div class="img">
          <figure>
            <Image
            src
            width={1000}
            height={500}
            />
            <figcaption>
                2022
            </figcaption>
          </figure>
        </div>
      </body>
    </main>
    </>
    )
}