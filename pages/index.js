import Head from 'next/head';
import Script from 'next/script'; // Next.js component for optimized script loading
import { useEffect } from 'react';
import LinksTable from '../components/LinksTable'; // Your dynamic table component

export default function Home() {

  // This is the "React way" to run JavaScript code after the page loads.
  // We put all your client-side scripts (FAQ, language switcher, etc.) here.
  useEffect(() => {
    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other items
        faqItems.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-answer').style.maxHeight = '0';
        });
        // Open the clicked item if it wasn't already active
        if (!isActive) {
          item.classList.add('active');
          const answer = item.querySelector('.faq-answer');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });

    // --- Language Switcher Logic ---
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
      const toggleSwitcher = (event) => {
        languageSwitcher.classList.toggle('is-open');
        event.stopPropagation();
      };
      languageSwitcher.addEventListener('click', toggleSwitcher);

      const closeSwitcher = () => {
        if (languageSwitcher.classList.contains('is-open')) {
          languageSwitcher.classList.remove('is-open');
        }
      };
      document.addEventListener('click', closeSwitcher);
      
      // Cleanup function to remove listeners when component unmounts
      return () => {
        languageSwitcher.removeEventListener('click', toggleSwitcher);
        document.removeEventListener('click', closeSwitcher);
      };
    }

    // --- Footer Year Logic ---
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
      footerYear.textContent = new Date().getFullYear();
    }

  }, []); // The empty array [] means this effect runs only once after the page mounts.


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>Dice Dreams Free Rolls - Daily Links (Today, September 4th, 2025)</title>
        <meta name="description" content="Get your daily list of unclaimed Dice Dreams free rolls for today! We provide official, tested links for free rolls, coins, and gifts on September 4th, 2025." />
        
        {/* --- SEO & SOCIAL META TAGS --- */}
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <link rel="canonical" href="https://dicedreamsrollsfree.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dice Dreams Free Rolls Today - September 2025 (Updated)" />
        <meta property="og:description" content="Get your daily list of unclaimed Dice Dreams free rolls for today! We provide official, tested links for free rolls, coins, and gifts on September 4th, 2025." />
        <meta property="og:url" content="https://dicedreamsrollsfree.com/" />
        <meta property="og:site_name" content="Dice Dreams Rolls Free" />
        <meta property="og:updated_time" content="2025-09-04T15:23:27+00:00" />
        
        <link rel="alternate" hreflang="en" href="https://dicedreamsrollsfree.com/" />
        <link rel="alternate" hreflang="es" href="https://dicedreamsrollsfree.com/es" />
        <link rel="alternate" hreflang="ro" href="https://dicedreamsrollsfree.com/ro" />
        <link rel="alternate" hreflang="fr" href="https://dicedreamsrollsfree.com/fr" />
        <link rel="alternate" hreflang="ar" href="https://dicedreamsrollsfree.com/ar" />
        <link rel="alternate" hreflang="x-default" href="https://dicedreamsrollsfree.com/" />

        {/* --- OG & Twitter Image --- */}
        <meta property="og:image" content="https://dicedreamsrollsfree.com/bg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://dicedreamsrollsfree.com/bg.webp" />
        <meta name="twitter:title" content="Dice Dreams Free Rolls Today - September 2025 (Updated)" />
        <meta name="twitter:description" content="Get your daily list of unclaimed Dice Dreams free rolls for today! We provide official, tested links for free rolls, coins, and gifts." />

        {/* --- External Scripts --- */}
        <meta name="google-site-verification" content="AjdiY8FgnWmkI0ylnt1YFiwwGiySxo6uUNO62C-24Bg" />
        
        {/* --- Icons & Favicon --- */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" href="/favicon.jpg" />

        {/* --- SEO Schema --- */}
        {/* NOTE: We use dangerouslySetInnerHTML for JSON-LD scripts in React */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org","@type": "WebPage","name": "Dice Dreams Free Rolls - Unclaimed Daily Links","headline": "Dice Dreams Free Rolls Today - Updated September 4th, 2025","description": "Your top source for daily unclaimed Dice Dreams free rolls. Claim official rewards like free rolls and coins instantly. All gift links are provided by the official developers, SuperPlay.","url": "https://dicedreamsrollsfree.com/","datePublished": "2024-01-01T09:00:00+00:00","dateModified": "2025-09-04T15:23:27+00:00"}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org","@type": "FAQPage","mainEntity": [{"@type": "Question","name": "What are Free Rolls in Dice Dreams?","acceptedAnswer": {"@type": "Answer","text": "Free rolls are free spins of the dice in the game. They allow you to play the game, earn coins, and attack other players without having to wait or pay real money."}},{"@type": "Question","name": "Is it safe to use the Dice Dreams Free Rolls Links?","acceptedAnswer": {"@type": "Answer","text": "Yes, 100%. Every link on our website is an official reward link provided directly by the game's developers, SuperPlay. We simply collect and test them for your convenience."}},{"@type": "Question","name": "Can I use cheats to get unlimited Dice Dreams Free Rolls?","acceptedAnswer": {"@type": "Answer","text": "No, there are no legitimate cheats for unlimited rolls. Any tool or website claiming to offer this is likely a scam and could compromise your account's security. The only safe way to get free rolls is through official links and in-game activities."}},{"@type": "Question","name": "After how long do free links expire?","acceptedAnswer": {"@type": "Answer","text": "Most official reward links are only valid for 48 to 72 hours after they are issued. That's why it's important to visit our site daily to claim the latest links before they expire."}},{"@type": "Question","name": "What is the reason for not getting free rolls after clicking the link?","acceptedAnswer": {"@type": "Answer","text": "There are a few common reasons: 1) You already claimed that specific reward from another source. 2) The link has expired. 3) You must have the Dice Dreams app installed on your device before clicking the link."}}]}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "VideoGame", "name": "Dice Dreams", "applicationCategory": "Game", "operatingSystem": "iOS, Android", "offers": { "@type": "Offer", "price": "0" }}` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@type": "Article", "headline": "Dice Dreams Free Rolls Today - Updated September 4th, 2025", "mainEntityOfPage": { "@id": "https://dicedreamsrollsfree.com/" }, "publisher": { "@id": "https://dicedreamsrollsfree.com/" }, "author": { "@id": "https://dicedreamsrollsfree.com/" }, "datePublished": "2025-09-01T09:00:00+00:00", "dateModified": "2025-09-04T15:23:27+00:00"}` }} />
      </Head>

      {/* --- External Ad & Push Notification Scripts --- */}
      {/* We use the Next.js Script component for better performance loading */}
      <Script src='https://push.aplu.io/push-notify.js' strategy="lazyOnload" />
      <Script defer src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2004567674410865" crossOrigin="anonymous" strategy="lazyOnload" />
      <Script id="webpushblaze" strategy="lazyOnload">
        {`
          window.addEventListener('DOMContentLoaded', function() {
              setTimeout(function() {
                  (function(d, t) {
                      var g = d.createElement(t),
                          s = d.getElementsByTagName(t)[0];
                      g.src = "https://cdn.webpushblaze.com/112/integrate-dicedreamsrollsfree.com.js";
                      s.parentNode.insertBefore(g, s);
                  }(document, "script"));
              }, 1000);
          });
        `}
      </Script>


      {/* --- START OF BODY CONTENT --- */}
      {/* Note: 'class' is replaced with 'className' in React/JSX */}
      
      <div className="side-ad ad-left">
          <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-2004567674410865" data-ad-slot="3913597721" data-ad-format="auto" data-full-width-responsive="true"></ins>
          <Script id="ad-left-script">
            (adsbygoogle = window.adsbygoogle || []).push({});
          </Script>
      </div>
      <div className="side-ad ad-right">
          <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-2004567674410865" data-ad-slot="3913597721" data-ad-format="auto" data-full-width-responsive="true"></ins>
          <Script id="ad-right-script">
            (adsbygoogle = window.adsbygoogle || []).push({});
          </Script>
      </div>

      <header className="main-header">
          <div className="container">
              <a href="/" className="logo">DiceDreams<span>RollsFree</span></a>
              <nav className="main-nav">
                  <a href="/" className="active">Home</a>
                  <a href="/guides/">Guides</a>
                  <a href="/items/">Items</a>
                  <a href="/social/">Social</a>
                  <a href="/blog/">Blog</a>
              </nav>
              <nav className="language-switcher">
                  <div className="language-current">
                      <img className="language-flag" src="/en.svg" width="24" height="24" alt="Dice Dreams Free Rolls" />
                      <span className="language-code">EN</span>
                  </div>
                  <ul className="language-items">
                    <li className="language-item"><a href="/es/"><img className="language-flag" src="/es.svg" width="32" height="32" alt="Tiradas y Regalos Gratis de Dice Dreams" /><span className="language-code">ES</span></a></li>
                    <li className="language-item"><a href="/ro/"><img className="language-flag" src="/Flag_of_Romania.svg" width="32" height="32" alt="Tiraje și Cadouri Gratuite Dice Dreams" /><span className="language-code">RO</span></a></li>
                    <li className="language-item"><a href="/fr/"><img className="language-flag" src="/fr.svg" width="32" height="32" alt="Tours & Cadeaux Gratuits Dice Dreams" /><span className="language-code">FR</span></a></li>
                    <li className="language-item"><a href="/ar/"><img className="language-flag" src="/Arabic-Language-Flag.svg" width="32" height="32" alt="ز مجنية - روابط يومية" /><span className="language-code">AR</span></a></li>
                    <li className="language-item"><a href="/"><img className="language-flag" src="/en.svg" width="32" height="32" alt="Dice Dreams Free Rolls" /><span className="language-code">EN</span></a></li>
                  </ul>
              </nav>
          </div>
      </header>

      <main>
          <div className="container">
              <div className="page-header">
                  <h1>Dice Dreams Free Rolls & Gifts</h1>
                  <h2>Daily Updated Links for September 4th, 2025</h2>
              </div>
              <div className="content-section">
                  <p className="intro-text" style={{ marginBottom: '2rem' }}>🎲 Dice Dreams Rolls Free brings you the latest daily updated free rolls, coins, and bonus rewards for September 2025. Unlock fresh Dice Dreams links every day to keep your game rolling, collect more coins, and build your kingdom faster. All links are 100% working, safe, and verified — updated in real time so you never miss out on free rewards. Bookmark dicedreamsrollsfree.com to claim your daily Dice Dreams free rolls instantly and stay ahead of the game!</p>
                  
                  {/*
                    THIS IS THE KEY CHANGE!
                    Instead of static HTML, we are rendering our dynamic LinksTable component.
                    All the fetching and table logic is now neatly handled inside that component.
                  */}
                  <LinksTable />
                  
                  <div className="ad-container">
                      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-2004567674410865" data-ad-slot="5218940536" data-ad-format="auto" data-full-width-responsive="true"></ins>
                      <Script id="ad-main-script">
                        (adsbygoogle = window.adsbygoogle || []).push({});
                      </Script>
                  </div>
              </div>
              
              {/* --- START: ALL OTHER CONTENT SECTIONS --- */}
              {/* This is a direct copy-paste of your content, converted to JSX */}

              <div className="content-section">
                <h2 className="info-title">What is Dice Dreams Free Rolls Today?</h2>
                <p>Free rolls in Dice Dreams are essentially free spins of the dice that allow players to continue building kingdoms, attacking rivals, and collecting rewards without spending money. These free rolls are essential for progressing in the game, and players can claim them daily through special links or other in-game methods explained below on this page.</p>
                <p>The developers of <a href="https://play.google.com/store/apps/details?id=com.superplaystudios.dicedreams&hl=en">Dice Dreams</a>, SuperPlay, regularly share official links that give players extra free rolls, coins, and bonuses. These links are posted on their verified social channels, but it can be difficult to track them all in one place. That’s why we update dicedreamsrollsfree.com daily with the latest, fully working free roll links so you never miss out.</p>
                <p>Instead of searching through different platforms, we bring all the latest free rolls and rewards in one place. Every link is tested and verified, so you can claim your bonuses instantly and keep rolling without interruptions. Bookmark this page to stay updated and get the maximum advantage from your daily rewards.</p>
              </div>

              <div className="content-section">
                <h2 className="info-title">Exciting Features Of Dice Dreams Rolls</h2>
                <p>Dice Dreams free rolls links have countless features. Some of these are listed below:</p>
                <div className="features-layout">
                    <div className="features-list">
                        <ul>
                            <li> Daily Verified Links</li>
                            <li>⚡ Instant Updates</li>
                            <li>📅 Valid for 24-48 hours</li>
                            <li>️ 100% Safe & Secure</li>
                            <li>Updated consistently after a while</li>
                            <li>Collected from the official accounts of developers</li>
                            <li>Claim your free rolls today and enjoy.</li>
                        </ul>
                    </div>
                    <div className="features-image">
                        <img src="/dice-dreams-free-rolls-today.webp" alt="Dice Dreams Free Rolls Today with five colorful dice" />
                    </div>
                </div>
              </div>
              
              {/* ... Paste all of your other content sections here, just make sure to change 'class' to 'className' ... */}
              {/* For brevity, I'll include the last few sections as an example */}

              <div className="content-section">
                  <h2 className="info-title">Frequently Asked Questions (FAQ’s)</h2>
                  <div className="faq-section">
                      <div className="faq-item">
                          <button className="faq-question">What are Free Rolls in Dice Dreams?</button>
                          <div className="faq-answer">
                              <p>Free rolls are free spins of the dice in the game. They allow you to play the game, earn coins, and attack other players without having to wait or pay real money.</p>
                          </div>
                      </div>
                      <div className="faq-item">
                          <button className="faq-question">Is it safe to use the Dice Dreams Free Rolls Links?</button>
                          <div className="faq-answer">
                              <p>Yes, 100%. Every link on our website is an official reward link provided directly by the game's developers, SuperPlay. We simply collect and test them for your convenience.</p>
                          </div>
                      </div>
                      <div className="faq-item">
                          <button className="faq-question">Can I use cheats to get unlimited Dice Dreams Free Rolls?</button>
                          <div className="faq-answer">
                              <p>No, there are no legitimate cheats for unlimited rolls. Any tool or website claiming to offer this is likely a scam and could compromise your account's security. The only safe way to get free rolls is through official links and in-game activities.</p>
                          </div>
                      </div>
                      <div className="faq-item">
                          <button className="faq-question">After how long do free links expire?</button>
                          <div className="faq-answer">
                              <p>Most official reward links are only valid for 48 to 72 hours after they are issued. That's why it's important to visit our site daily to claim the latest links before they expire.</p>
                          </div>
                      </div>
                      <div className="faq-item">
                          <button className="faq-question">What is the reason for not getting free rolls after clicking the link?</button>
                          <div className="faq-answer">
                              <p>There are a few common reasons: 1) You have already claimed that specific reward from another source. 2) The link has expired. 3) You must have the Dice Dreams app installed on your device before clicking the link.</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="content-section">
                  <h2 className="info-title">Conclusion</h2>
                  <p>Dice Dreams free rolls are the best way to enjoy the game without spending real money. By claiming the links provided here, logging in daily, completing events, and sharing with friends, you can quickly grow your roll count and keep playing longer.</p>
                  <p>All the links on our site are safe, secure, and sourced directly from the official Dice Dreams pages, so you can claim them with confidence. Stay updated with the latest rewards, play smartly, and make your kingdom stronger every single day.</p>
              </div>

          </div>
      </main>

      <footer>
          <div className="container">
              <p>© <span id="footer-year">2025</span> DiceDreamsRollsFree.com | All rights reserved.</p>
              <p>This is an unofficial fan resource and is not affiliated with SuperPlay or Dice Dreams. Also Check <a href="https://freeawcoins.com">Free Avatar World Coins</a></p>
          </div>
      </footer>
    </>
  );
}