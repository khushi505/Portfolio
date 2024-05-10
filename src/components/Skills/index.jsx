import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import TagCloud from 'TagCloud'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeTab, setActiveTab] = useState('skills')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  useEffect(() => {
    const container = '.tag-cloud-content'
    const texts = [
      'NodeJS',
      'React',
      'ExpressJS',
      'MongoDB',
      'PowerBi',
      'BootStrap',
      'HTML',
      'Animations',
      'JavaScript',
      'CSS3',
      'SCSS',
      'Tailwind',
    ]

    const options = {
      radius: 300,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    }

    TagCloud(container, texts, options)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                '',
                '&',
                '',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>

          <div className="details">
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === 'skills' ? 'active-link' : ''
                }`}
                onClick={() => handleTabClick('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === 'experience' ? 'active-link' : ''
                }`}
                onClick={() => handleTabClick('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === 'education' ? 'active-link' : ''
                }`}
                onClick={() => handleTabClick('education')}
              >
                Education
              </p>
            </div>

            <div
              className={`tab-contents ${
                activeTab === 'skills' ? 'active-tab' : ''
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span className="heading">Frontend Development</span>
                  <br />
                  <span className="inner">
                    Skilled in React, JavaScript, SCSS, Tailwind, <br /> Styled
                    Components, HTML, CSS
                  </span>
                </li>
                <li>
                  <span className="heading">Backend Development</span>
                  <br />
                  <span className="inner">
                    Skilled in NodeJs, ExpressJs, MongoDB
                  </span>
                </li>
                <li>
                  <span className="heading">Data Analysis</span>
                  <br />
                  <span className="inner">
                    Skilled in Power BI, Data Visualization
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === 'experience' ? 'active-tab' : ''
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span className="heading">Intern</span>
                  <br />
                  <span className="inner">Obrien Company</span>
                </li>
                <li>
                  <span className="heading">Interim Board</span>
                  <br />
                  <span class="inner">Next Tech Lab</span>
                </li>

                <li>
                  <span className="heading">Team Lead</span>
                  <br />
                  <span class="inner">Student Council</span>
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === 'education' ? 'active-tab' : ''
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span className="heading">2020</span>
                  <br />
                  <span className="inner">10th from St. Patrick's College</span>
                </li>
                <li>
                  <span className="heading">2022</span>
                  <br />
                  <span className="inner">12th from Boston University</span>
                </li>
                <li>
                  <span className="heading">2022-2026</span>
                  <br />
                  <span className="inner">B.Tech at SRM University</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tag-cloud">
          <span className="tag-cloud-content"></span>{' '}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
