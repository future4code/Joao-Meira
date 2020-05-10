import { shallow } from "enzyme"
import { Header, ImgContainer } from "."
import mockLogo from '../../img/logo.png'


describe('Header',() => {
    test('Checking integrity of Footer components', () => {

        const mockToLogout = jest.fn()
        const mockPropsToLoginPage = jest.fn()
        const

        const renderedComponent = shallow(
        <Header
        src={mockLogo}
        onClickToLogout={mockToLogout}
        onClickGoToLogin={mockPropsToLoginPage}
        />)

        const findImgContainer = renderedComponent.find(ImgContainer)
        const findButtonWrapper = renderedComponent.find()

        expect(findImgContainer).toHaveLength(1);
        expect(findButtonWrapper).toHaveLength(1);
    })
})