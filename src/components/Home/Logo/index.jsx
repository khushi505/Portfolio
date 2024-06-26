// import { useEffect, useRef } from 'react'

// import './index.scss'

// const Logo = () => {
//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin)

//     gsap
//       .timeline()
//       .to(bgRef.current, {
//         duration: 0.5,
//         opacity: 1,
//       })
//       .from(outlineLogoRef.current, {
//         drawSVG: 0,
//         duration: 10,
//       })

//     gsap.fromTo(
//       solidLogoRef.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         delay: 3,
//         duration: 1,
//       }
//     )
//   }, [])

//   return (
//     <div className="logo-container" ref={bgRef}>
//       <img
//         className="solid-logo"
//         ref={solidLogoRef}
//         src={LogoS}
//         alt="JavaScript,  Developer"
//       />

//       <svg
//         width="559pt"
//         height="897pt"
//         version="1.0"
//         viewBox="0 0 559 897"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g
//           className="svg-container"
//           transform="translate(0 457) scale(.1 -.1)"
//           fill="none"
//         ></g>
//       </svg>
//     </div>
//   )
// }

// export default Logo
