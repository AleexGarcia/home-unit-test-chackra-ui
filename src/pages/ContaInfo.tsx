import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ContaInfo(){
    return(
        <Text fontSize='xl'>
            Informações da conta
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Conta
                </Text>
            </Link>
        </Text>
    )
}