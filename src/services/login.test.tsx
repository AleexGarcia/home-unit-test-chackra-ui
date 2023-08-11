import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        const userName = 'Alexandre';
        login(userName);
        expect(mockAlert).toHaveBeenCalledWith(`${userName}, seja Bem vindo(a)!`);
    })
})