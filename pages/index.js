import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sentinels</title>
      </Head>
      <main>
          <nav class="navbar">
            <li id="home"><a href='home.js'>The Sentinels</a></li>
            <li id="list"><a>Team</a></li>
            <li id="list"><a>Robots</a></li>
            <li id="list"><a>Blogs</a></li>
            <li id="list"><a>Sponsors</a></li>
            <li id="list"><a>Resources</a></li>
            <li id="list"><a>Contact us</a></li>
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
        </body>
      </main>
    </>
  )
}
