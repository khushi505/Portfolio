import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import expense from '../../assets/images/expense.png'
import news from '../../assets/images/news.png'
import blinkint from '../../assets/images/blinkint.png'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>
        <div className="work-list">
          <div className="work">
            <img src={expense} alt="Expense" />
            <div className="layer">
              <h3>Expense Tracker</h3>
              <p>
                In the expense tracker project, income and expenses are clearly
                distinguished, accompanied by a dynamic line graph for visual
                representation.
              </p>
              {/* <a href="#">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a> */}
            </div>
          </div>
          <div className="work">
            <img src={news} alt="News" />
            <div className="layer">
              <h3>News Website</h3>
              <p>
                In the news website project, news content will be conveniently
                organized into distinct sections, catering to diverse interests
                and preferences.
              </p>
              {/* <a href="#">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a> */}
            </div>
          </div>
          <div className="work">
            <img src={blinkint} alt="Blinkint" />
            <div className="layer">
              <h3>Blinkit</h3>
              <p>
                I've successfully replicated the Blinkit platform down to the
                finest detail, capturing its essence in both design and
                functionality.
              </p>
              {/* <a href="#">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a> */}
            </div>
          </div>
        </div>
        <a href="https://github.com/khushi505" className="btn">
          SEE MORE
        </a>
      </div>
    </div>
  )
}

export default Work
