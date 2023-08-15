import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import CardInfo from "../components/CardInfo";
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../components/AppContext'

interface userData {
  email: string,
  senha: string,
  nome: string,
  saldo: number
  id: string,
}

export default function Conta() {
  const [userData, setUserData] = useState<null | userData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);
  
  useEffect(() => {
    !isLoggedIn && navigate('/');
    const getData = async () => {
      const data: any | userData = await api;

      setUserData(data);
    }
    getData();
  }, [])

  const dataAtual = new Date();
  if (userData && id !== userData.id) {
    navigate('/');
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          userData === undefined || userData === null ?
            (
              <Center>
                <Spinner />
              </Center>
            ) :
            (
              <>
                <CardInfo
                  mainContent={`Bem vindo(a) ${userData?.nome}`}
                  content={`${dataAtual.getDay()}/${dataAtual.getMonth()}/${dataAtual.getFullYear()} ${dataAtual.getHours()}:${dataAtual.getMinutes()}`}
                />
                <CardInfo mainContent="Saldo" content={`R$${userData?.saldo} `} />
              </>
            )
        }
      </SimpleGrid>
    </Center>
  )
}