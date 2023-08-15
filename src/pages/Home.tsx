import { Card } from "../components/Card";
import { Flex, Input, Text, Box } from "@chakra-ui/react"
import { login } from "../services/login"
import { Button } from "../components/Button"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

export default function Home() {
    
    const [email, setEmail] = useState<string>('');
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();
    
    const validadeUser = async (email:string) => {
        const loggedIn = await login(email);
        if(!loggedIn){
            alert("Email incorreto!")
            return;
        }
        navigate('conta/1');
        setIsLoggedIn(true);
    }
    
    return (
        <Card>
            <Flex minW='320px' direction='column' gap='1rem' >
                <Text align={'center'} fontSize={'2xl'}>Faça o login</Text>
                <Input value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail' />
                <Input placeholder='Senha' />
                <Button event={() => validadeUser(email)} />
            </Flex>
        </Card >
    );
} 