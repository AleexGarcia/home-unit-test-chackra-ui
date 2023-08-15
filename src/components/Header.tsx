import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Center
} from "@chakra-ui/react"
import { AppContext } from "./AppContext"
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    setIsLoggedIn(false);
    navigate('/')
  }
  return (
    <Flex w='100vw' bgColor='#fff' p='1rem 2rem'>
      <Center>
        <Box >
          <Heading fontSize='3xl' >Dio Bank</Heading>
        </Box>
      </Center>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Center>
              <Button onClick={() => logout()}>
                Sair
              </Button>
            </Center>
          </>
        )
      }
    </Flex>
  )
}
