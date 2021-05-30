import "../styles/normalize.css"
import '../styles/global.css'

// import '../styles/navbar.css'

// Import FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab
  , faBars, faTimes, faChevronDown
  // , faCheckSquare, faCoffee
  )

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}