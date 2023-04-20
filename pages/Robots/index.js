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
            <li id="home"><a href='/'>The Sentinels</a></li>
            <li id="listright" class="list"><a href='/Team'><p>Team</p></a></li>
            <li id="listright" class="list"><a href='/Robots' ><p>Robots</p></a></li>
            <li id="listright" class="list"><a href='/Blogs' ><p>Blogs</p></a></li>
            <li id="listright" class="list"><a href='/Sponsors' ><p>Sponsors</p></a></li>
            <li id="listright" class="list"><a href='/Resources' ><p>Resources</p></a></li>
            <li id="listright" class="list"><a href='/Contact_us' ><p>Contact Us</p></a></li>
          </nav>
        
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