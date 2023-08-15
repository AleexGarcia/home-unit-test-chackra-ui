
const conta = {
    email: 'alexandre@gmail.com',
    senha: '123',
    nome: 'Alexandre Garcia',
    saldo: 2500.00,
    id: '1'
}

export const api = new Promise( (resolve) => {
    setTimeout(()=>{
        resolve(conta);
    },5000)
})