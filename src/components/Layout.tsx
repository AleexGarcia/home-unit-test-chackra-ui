import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return (
    <Box minH='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
      <Header />
      <Box  flexGrow='2' backgroundColor='#610505' p='2rem'>
        {children}
      </Box>
      <Footer />
    </Box>


  )
}
