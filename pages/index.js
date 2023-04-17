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
            <li id="listright" class="list"><a href='Team'><p>Team</p></a></li>
            <li id="listright" class="list"><a href='Robots' ><p>Robots</p></a></li>
            <li id="listright" class="list"><a href='Blogs' ><p>Blogs</p></a></li>
            <li id="listright" class="list"><a href='Sponsors' ><p>Sponsors</p></a></li>
            <li id="listright" class="list"><a href='Resources' ><p>Resources</p></a></li>
            <li id="listright" class="list"><a href='Contact_us' ><p>Contact Us</p></a></li>
          </nav>
        
        <body class= "homebody">
          <div class="img">
            <Image
              //src="/_DSC2042.JPG"
              src="/photoex.JPG"
              width={1000}
              height={500}
            />
          </div>


          <h1 class="Heading">News heading</h1>
          <div>
            {/* content */}
          </div>
          <div class="firstlogo">
            <Image
              src="/first.png"
              width={400}
              height={400}
            />
          </div>
          <div class="sponsors">
            {/* insert stuff */}
            <h1>Our sponsors</h1>

            <h2>We have none</h2>
          </div>


          <div class="calander">

          </div>


        </body>

        <footer>
          <div>
            © The Sentinels 2023
          </div>
          <div class="media">

          </div>
        </footer>
      </main>
    </>
  )
}

