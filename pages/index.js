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
            <li id="list"><a href='Team'>Team</a></li>
            <li id="list"><a href='Robots' >Robots</a></li>
            <li id="list"><a href='Blogs' >Blogs</a></li>
            <li id="list"><a href='Sponsors' >Sponsors</a></li>
            <li id="list"><a href='Resources' >Resources</a></li>
            <li id="list"><a href='Contact_us' >Contact us</a></li>
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
          <div class="sponsors">
            {/* insert stuff */}
            <h2>We have none</h2>
          </div>
          <div class="calander">

          </div>
        </body>
      </main>
    </>
  )
}
