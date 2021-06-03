import "../styles/normalize.css"
import '../styles/global.css'

// import '../styles/navbar.css'

// Import FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(fab
  , faBars, faTimes, faChevronDown
)

// Install fonts
import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"

// Import & customer Chakra
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}