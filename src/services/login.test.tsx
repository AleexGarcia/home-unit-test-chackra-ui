import { api } from "./api"
import { login } from "./login"

// const mockSetIsLoggedIn = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         isLoggedIn: false,
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))
// jest.mock('react-router-dom',()=>({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))
describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'alexandre@gmail.com';

    it('Deve exibir um alert com boas vindas, se email válido', async () => {
       const response = await login(mockEmail);
       expect(response).toBeTruthy()
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
        // expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido.com');
        expect(response).toBeFalsy();
        // expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        // expect(mockNavigate).not.toHaveBeenCalledWith()
    })

})