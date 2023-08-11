import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return (
    <Box minH='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
      <Header />
      {children}
      <Footer />
    </Box>


  )
}
