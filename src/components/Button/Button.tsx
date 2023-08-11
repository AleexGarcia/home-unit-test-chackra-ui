import {Button as Btn} from '@chakra-ui/react'
interface IUser{
    event: (n:string) => void
}

export const Button = ({event}: IUser) => {
    return(
        <Btn onClick={() => event(`Alexandre`)} colorScheme='teal' size='lg'>
            Entrar
        </Btn>
    );
}