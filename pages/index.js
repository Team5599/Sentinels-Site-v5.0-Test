import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
//import Router from 'next/Router'

export default function Home() {
  
  return (
    <>
    <main>
      <Head>
        <title>Sentinels</title>
        <link rel="icon" type="image/x-icon" href="/new_favicon.ico"/>
        <script src="/testScript.js"></script>
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



          <div class="img">
            <Image
              // src="/_DSC2042.JPG"
              src="/photoex.JPG"
              width={1000}
              height={500}
            />
          </div>

          {/* SLIDESHOW */}

          <div class="slideshow-container">
            <div class="mySlides fade">
              <div class="numbertext">1 / 3</div>
              <Image
              src="/_DSC2042.JPG"
              // src="/photoex.JPG"
              width={1000}
              height={500}
            />
              <div class="text">Caption Text</div>
            </div>

            <div class="mySlides fade">
              <div class="numbertext">2 / 3</div>
              <Image
              src="/_DSC2042.JPG"
              // src="/photoex.JPG"
              width={1000}
              height={500}
            />
              <div class="text">Caption Two</div>
            </div>

            <div class="mySlides fade">
              <div class="numbertext">3 / 3</div>
              <Image
              src="/_DSC2042.JPG"
              // src="/photoex.JPG"
              width={1000}
              height={500}
            />
              <div class="text">Caption Three</div>
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>

          <script src='/testScript.js' strategy='afterInteractive'>
            {/*add code in here?*/}
          </script>

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


          <div class="calender">
  
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

