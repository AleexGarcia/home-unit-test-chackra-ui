import { Box } from "@chakra-ui/react"

export const Card = ({children}:any) => {
  return (
    <Box backgroundColor='#fff' p='1rem' borderRadius='25px'>
      {children}
    </Box>
    
  )
}