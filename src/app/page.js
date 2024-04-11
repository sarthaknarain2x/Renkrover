// page.js

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Your existing content */}
      <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <ul className={styles.navLinks}>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
          <div className={styles.actions}>
            {/* Discord Server link */}
            <a href="https://discord.com/" className={styles.discordLink}>Discord Server</a>
            {/* Join Broadcast button */}
            <button className={styles.joinButton}>Join Broadcast</button>
          </div>
        </nav>
      {/* Hero section */}
      <section id="hero" className={`${styles.hero} ${styles.section}`}>
        {/* Navbar */}

        <div className={styles.abc} >

          <h1 className={styles.heroHeading}>
            Your new <Image src="/ai.svg" alt="AI" width={70} height={40} /> Trading!
          </h1>
          <p className={styles.para}>
          Get AI Generated Best Trades
          </p>
            
          <button className={styles.btn}>
              Get Started!
          </button>
        </div>
      </section>

      

      {/* About section */}
      <section id="about" className={`${styles.about} ${styles.section}`}>
        {/* Image section */}
        <div className={styles.imageSection}>
          <Image src="/mockup.png" alt="Mobile Image" width={400} height={800} />
        </div>
        {/* Text section */}
        <div className={styles.textSection}>
          <h2>Built by professionals, for professionals</h2>

          <p>At RenkoRover, we recognize the daunting landscape of options trading, especially considering SEBI reports that suggest approximately 90% of individual traders face losses in this volatile market. We understand that losses often stem not just from market complexities but also from the psychological challenges traders encounter. Our solution is crafted to address these concerns. </p>

          <button className={styles.seeHowButton}>See how</button>
        </div>
      </section>

      <section id="features" className={`${styles.features} ${styles.section}`}>
        {/* Content of the Features section */}
        <div className={styles.featurePart}>
          <Image src="/card.png" alt="feature" width={291} height={38} />
        </div>

        <div className={styles.featureText}>
          <p>
            All Your Data Needs in a Single <span className={styles.aiPowered}>AI-Powered</span> Workspace
          </p>
        </div>

        <div className={styles.additionalPara}>
          <p>
            Hey there world traveler! It’s time for you globetrotters to rejoice cos’ sending money abroad just got stupid simple :)
          </p>
        </div>

        <div className={styles.frame}>
          {/* First set of lists */}
          <ul className={styles.list}>
            <li>
              <h2 className={styles.heading}>Automate Your Trades with Our Intelligent Bot</h2>
              <p className={styles.paragraph}>Looking for a smarter, faster, and more efficient way to trade? Our trading bot is here to help. Our intelligent system will analyze the market.</p>
            </li>
            {/* Add more list items here if needed */}
          </ul>
          {/* Second set of lists */}
          <ul className={styles.list}>
            <li>
              <h2 className={styles.heading}>Real-Time Scalping</h2>
              <p className={styles.paragraph}>Execute rapid, real-time trades within the Nifty 50 options market, leveraging swift market movements for quick profits.</p>
            </li>
            {/* Add more list items here if needed */}
          </ul>
          {/* Third set of lists */}
          <ul className={styles.list}>
            <li>
              <h2 className={styles.heading}>Risk Management System</h2>
              <p className={styles.paragraph}>Implements robust risk management protocols to minimize potential losses, ensuring a balanced approach to trading.</p>
            </li>
            {/* Add more list items here if needed */}
          </ul>
        </div>
      </section>

      <section className={`${styles.partner} ${styles.section}`}>
        <div className={styles.imgWrapper}>
          <img src="/partners.png" alt="Image" />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.partnersText}>Our partners ✅</p>
          <p className={styles.trustedByText}>Trusted by</p>
        </div>
      </section>

      <section className={`${styles.faqs} ${styles.section}`}>
        {/* Left section */}
        <div className={styles.leftSection}>
          <h2>Frequently Asked questions 🙋‍♀️</h2>
          <h3>
            Got questions? We got answers!
          </h3>
          <p>
            Feel free to reach out to us if you have more questions for us.
          </p>
          <button>Contact us</button>
        </div>

        {/* Right section */}
        <div className={styles.rightSection}>
          <div className={styles.question}>
            <h3>Question 1</h3>
            <span>+</span>
            <p>Answer 1</p>
          </div>
          <div className={styles.question}>
            <h3>Question 2</h3>
            <span>+</span>
            <p>Answer 2</p>
          </div>
          <div className={styles.question}>
            <h3>Question 3</h3>
            <span>+</span>
            <p>Answer 3</p>
          </div>
          <div className={styles.question}>
            <h3>Question 4</h3>
            <span>+</span>
            <p>Answer 4</p>
          </div>
          <div className={styles.question}>
            <h3>Question 5</h3>
            <span>+</span>
            <p>Answer 5</p>
          </div>
        </div>
      </section>

      <section className={`${styles.apps} ${styles.section}`}>
        {/* Left side */}
        <div className={styles.leftSide}>
          <h2>The future of personal  banking</h2>
          <p>Go borderless on mobile! Download the app and signup to enjoy.</p>
          <div className={styles.imageContainer}>
            <img src="/img2.png" alt="Image 2" />
          </div>
          <p>Trusted by 50k+ customers</p>
          <img src="/stars.png" alt="Image 3" />
        </div>

        {/* Right side */}
        <div className={styles.rightSide}>
          <img src="/img4.png" alt="Image 4" />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            {/* Your logo image goes here */}
            <img src="/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <div className={styles.links}>
            <a href="#">Legal</a>
            <a href="#">Product</a>
            <a href="#">Resources</a>
            {/* Add more links as needed */}
          </div>
        </div>
        <div className={styles.bottomText}>
          <p>&copy; 2023 borderless. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
