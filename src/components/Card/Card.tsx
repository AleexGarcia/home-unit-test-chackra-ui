import { Flex, Input, Text, Box, Center } from "@chakra-ui/react"
import { login } from "../../services/login"
import { Button } from "../Button/Button"
export const Card = () => {

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' flexGrow='2' backgroundColor='#610505' p='2rem'>
      <Flex minW='320px' direction='column' gap='1rem' backgroundColor='#fff' p='1rem' borderRadius='25px'>
        <Text align={'center'} fontSize={'2xl'}>Faça o login</Text>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />
        <Button event={login} />
      </Flex>
    </Box>

  )
}