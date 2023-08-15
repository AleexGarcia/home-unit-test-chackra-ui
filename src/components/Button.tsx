import {Button as Btn} from '@chakra-ui/react'
interface IUser{
    event: () => void // MouseEventHandler
}

export const Button = ({event}: IUser) => {
    return(
        <Btn onClick={event} colorScheme='teal' size='lg'>
            Entrar
        </Btn>
    );
}