import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <nav class="navbar">
            <li id="home"><a href='/'>The Sentinels</a></li>
            <li id="listright"><a href='/Team'>Team</a></li>
            <li id="listright"><a href='/Robots' >Robots</a></li>
            <li id="listright"><a href='/Blogs' >Blogs</a></li>
            <li id="listright"><a href='/Sponsors' >Sponsors</a></li>
            <li id="listright"><a href='/Resources' >Resources</a></li>
            <li id="listright"><a href='/Contact_us' >Contact us</a></li>
          </nav>
        <main>
            <body class = "homebody">
                <h1 class="Heading">Sponsors</h1>

                <div>
                    <li>a pebble on the side of the road</li>
                    <li>neighborhood homeless cat</li>
                    <li>a piece of grass</li>
                </div>
            </body>

        </main>
    </>
  )}
