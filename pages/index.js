import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
//import Router from 'next/Router'
export default function Home() {
  return (
    <>
    <main>

      <Head>
        <title>Sentinels</title>
      </Head>
          <nav class="navbar">
            <li id="home"><a href=''>The Sentinels</a></li>
            <li id="list"><a href='Team.js'>Team</a></li>
            <li id="list"><a href='Robots.js' >Robots</a></li>
            <li id="list"><a href='Blogs.js' >Blogs</a></li>
            <li id="list"><a href='Sponsors.js' >Sponsors</a></li>
            <li id="list"><a href='Resources.js' >Resources</a></li>
            <li id="list"><a href='Contact_us.js' >Contact us</a></li>
          </nav>
        
        <body>
          <div class="img">
            <Image
              src="/_DSC2042.JPG"
              width={1600}
              height={300}
            />
          </div>


          <h1 class="Heading">News heading</h1>
          <div>
            {/* content */}
          </div>
          <div class="firstlogo">
            <Image
              src="/first.png"
              width={500}
              height={400}
            />
          </div>
        </body>
      </main>
    </>
  )
}
