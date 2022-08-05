import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import AppComponent from '../components/component'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Source Of Upliftment</title>
        <meta property="og:title" content="Source Of Upliftment" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <h1 className="landing-page-logo">Source Of Lifting Self Upwards</h1>
          <div
            data-type="BurgerMenu"
            className="landing-page-burger-menu"
          ></div>
          <div data-type="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side">
                <div className="landing-page-links-container">
                  <span className="landing-page-text">Home</span>
                  <span className="landing-page-text01">About</span>
                  <span className="landing-page-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="landing-page-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon2"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon4"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon6"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <div className="landing-page-container01">
              <AppComponent></AppComponent>
              <h2 className="subheading landing-page-subheading">
                Through Whole Journey
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1 className="landing-page-text05 no-underline">Upliftment Sources</h1>
        <span className="landing-page-text06">Get It And Get To Study</span>
        <div className="landing-page-cards-container">
          <div className="landing-page-container02">
            <img
              alt="image"
              src="/playground_assets/worried-300h.gif"
              className="landing-page-image"
            />
            <div className="landing-page-container03">
              <span className="landing-page-text07">
                Self-Doubt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="landing-page-text08">
                Whenever you feel self doubt whether I can do this or not,
                whether I will pass or not and so on or else you feel to give up
                then go here.
              </span>
              <div className="landing-page-container04">
                <Link
                  to="/self-doubt"
                  className="landing-page-navlink button border-indigo-400 cursor-pointer duration-300 shadow-xl hover:bg-indigo-500 transition-colors border-2 py-2 text-indigo-500 text-sm hover:text-indigo-100 rounded-full px-6 shadow-indigo-300/30"
                >
                  Get Free From It
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-page-container05">
            <img
              alt="image"
              src="/playground_assets/comfort%20zone-300h.gif"
              className="landing-page-image1"
            />
            <div className="landing-page-container06">
              <span className="landing-page-text09">Get To Study</span>
              <span className="landing-page-text10">
                Whenever you feel laziness or find hard to get start study or
                going back to study then read this. It will surely make you
                leave your comfort zone.
              </span>
              <div className="landing-page-container07">
                <Link
                  to="/get-to-study"
                  className="landing-page-navlink1 button cursor-pointer text-indigo-500 hover:bg-indigo-500 shadow-xl duration-300 hover:text-indigo-100 border-2 border-indigo-400 text-sm px-6 cursor-pointer transition-colors py-2 shadow-indigo-300/30 rounded-full"
                >
                  <span className="landing-page-text11">
                    Get Started With Study
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-page-container08">
            <img
              alt="image"
              src="/playground_assets/deadline-300h.gif"
              className="landing-page-image2"
            />
            <div className="landing-page-container09">
              <span className="landing-page-text12">Study Long</span>
              <span className="landing-page-text13">
                Once you started study but feel to leave it or want to study
                more but find hard to do it then go in this placeholder, will
                make you sit for long hours.
              </span>
              <div className="landing-page-container10">
                <Link
                  to="/long-hours-studying"
                  className="landing-page-navlink2 button text-sm border-2 py-2 hover:text-indigo-100 transition-colors cursor-pointer shadow-xl shadow-indigo-300/30 px-6 hover:bg-indigo-500 border-indigo-400 rounded-full duration-300 text-indigo-500"
                >
                  Keep Studying
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-page-container11">
            <img
              alt="image"
              src="/playground_assets/coffee%20break-300h.gif"
              className="landing-page-image3"
            />
            <div className="landing-page-container12">
              <span className="landing-page-text14">
                Less Break Time &amp; Get Back
              </span>
              <span className="landing-page-text15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </span>
              <div className="landing-page-container13">
                <Link
                  to="/lesser-break"
                  className="landing-page-navlink3 button rounded-full border-2 border-indigo-400 hover:text-indigo-100 transition-colors shadow-indigo-300/30 shadow-xl duration-300 py-2 text-sm hover:bg-indigo-500 cursor-pointer px-6 text-indigo-500"
                >
                  Power Break
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-page-container14">
            <img
              alt="image"
              src="/playground_assets/development%20focus%20%5B1%5D-300h.gif"
              className="landing-page-image4"
            />
            <div className="landing-page-container15">
              <span className="landing-page-text16">No Focus Elsewhere</span>
              <span className="landing-page-text17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </span>
              <div className="landing-page-container16">
                <Link
                  to="/extra-time-wasting"
                  className="landing-page-navlink4 button shadow-xl border-indigo-400 px-6 py-2 transition-colors duration-300 rounded-full hover:text-indigo-100 shadow-indigo-300/30 hover:bg-indigo-500 cursor-pointer border-2 text-sm text-indigo-500"
                >
                  <span className="landing-page-text18">
                    Avoid Distractions
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="landing-page-container17">
            <img
              alt="image"
              src="/playground_assets/early%20morning-300h.gif"
              className="landing-page-image5"
            />
            <div className="landing-page-container18">
              <span className="landing-page-text19">No Sleep Call</span>
              <span className="landing-page-text20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </span>
              <div className="landing-page-container19">
                <Link
                  to="/sleep-problem"
                  className="landing-page-navlink5 button border-2 transition-colors text-sm duration-300 px-6 cursor-pointer py-2 border-indigo-400 text-indigo-500 shadow-xl hover:bg-indigo-500 hover:text-indigo-100 rounded-full shadow-indigo-300/30"
                >
                  <span className="landing-page-text21">
                    Keep Awake For Future Sleep
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1 className="landing-page-text22">
            <span>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।</span>
            <br></br>
            <span>मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ 2.४७ ॥</span>
          </h1>
        </div>
        <h1 className="landing-page-text25">
          <br></br>
          <span className="landing-page-text27">
            The Only Motive Is That You Give Your 100%, Rest Is On God, Rest Is
            Assured.​
          </span>
        </h1>
        <div className="landing-page-menu1">
          <div className="landing-page-links-container1"></div>
          <div className="landing-page-follow-container1"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
