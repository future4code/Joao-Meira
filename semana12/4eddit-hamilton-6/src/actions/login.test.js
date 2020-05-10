import {toRenderSignUp, toSignUp} from './login'


describe("SignUp Render Action", () => {
    test('SignUp screen renderization command', () =>{
        
        const mockRender = true;

        const action = toRenderSignUp(mockRender);

        expect(action.type).toBe('SET_RENDER_SIGN_UP')
        expect(action.payload.renderSignUp).toBe(mockRender)
    })
})
