import React, { useState, useEffect } from 'react'
import './index.scss'
import { v4 as uuidv4 } from 'uuid'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import blackhole from '../../assets/images/blackhole.png'
import blinkint from '../../assets/images/blinkint.png'
import chef1 from '../../assets/images/chef1.png'
import chef2 from '../../assets/images/chef2.png'
import currency from '../../assets/images/currency.png'
import expense from '../../assets/images/expense.png'
import guess from '../../assets/images/guess.png'
import howl from '../../assets/images/howl.png'
// import itask from '../../assets/image/itask.png'
import joke from '../../assets/images/joke.png'
import kisan from '../../assets/images/kisan.png'
import landing from '../../assets/images/landing.png'
import matchup from '../../assets/images/matchup.png'
import news from '../../assets/images/news.png'
import scroller from '../../assets/images/scroller.png'
import tictac from '../../assets/images/tictac.png'
import togo from '../../assets/images/togo.png'

// Create a longer sequence with duplicated images
const images = [
  blackhole,
  blinkint,
  chef1,
  chef2,
  currency,
  expense,
  guess,
  howl,
  joke,
  kisan,
  landing,
  matchup,
  news,
  scroller,
  tictac,
  togo,
].map((img) => ({
  id: uuidv4(),
  image: img,
}))

const Banner = ({ speed }) => {
  const extendedImages = [...images, ...images] //

  return (
    <div className="banner">
      <div className="banner-inner">
        {extendedImages.map((img) => (
          <img key={img.id} src={img.image} alt="Banner Slide" />
        ))}
      </div>
    </div>
  )
}

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="container work-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>
        <Banner images={images} speed={5000} className="banner1" />
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Work
