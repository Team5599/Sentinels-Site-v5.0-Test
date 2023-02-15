import styles from '../public/index.css'; //replace with css file

export default function Home() {
  return (
    <div>
      <div class="navbar">      
          <div><img src=""></img></div>          {/*sticky navbar*/}
          <div>About us</div>
          <div>Our team</div>
          <div>Community</div>
          <div>Contact us</div>
          <div>Donate</div>
      </div>
      <div class="block"></div>                 {/*TBD what content to put maybe a photo?*/}

      <h1>Cardozo's Robotics team</h1>
    <div class="imgdiv">
      <img></img>
    </div>

    <div class="midbloc">
      <div class="abt_us">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </div>

      <div class="sponser">
        <h2>Our sponsers</h2>
      </div>
    </div>
      

      <div class="newsletter">
        <h2>Newsletter</h2>
      </div>


      <div class="calendar">
        <h2>Calendar</h2>
      </div>
      <footer></footer> 
    </div>                        
  )
}
