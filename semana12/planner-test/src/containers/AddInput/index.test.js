import { shallow } from "enzyme"
import { AddInput, Wrapper, daysOfTheWeek } from "."
import React from 'react'
import { TextField, Button, MuiThemeProvider, Select, MenuItem } from "@material-ui/core"



describe('AddInput container',() => {
    test('Checking subcomponents of AddInput container', () => {

        const renderedComponent = shallow(<AddInput/>)

        const findWrapper = renderedComponent.find(Wrapper)
        const findTextField = renderedComponent.find(TextField)
        const findButton = renderedComponent.find(Button)
        const findMuiThemeProvider = renderedComponent.find(MuiThemeProvider)
        const findSelect = renderedComponent.find(Select)
        const findMenuItem = renderedComponent.find(MenuItem)

        expect(findWrapper).toHaveLength(1);
        expect(findTextField).toHaveLength(1);
        expect(findButton).toHaveLength(1);
        expect(findMuiThemeProvider).toHaveLength(1);
        expect(findSelect).toHaveLength(1);
        expect(findMenuItem).toHaveLength(8);
    })
    test('Checking Select integrity', () => {

        const renderedComponent = shallow(
        <AddInput/>)

        const findSelect = renderedComponent.find(Select)
        findSelect.simulate('change', {target: { value: 'domingo', name: 'commitmentDay' }})

        expect(renderedComponent.state()).toEqual({commitmentDay:'domingo', commitmentInput: ''});
    })
    test('Checking Menu Item integrity', () => {
        const renderedComponent = shallow(<AddInput/>)

        const findMenuItem = renderedComponent.find(MenuItem)

        daysOfTheWeek.forEach((day, index) => {
            expect(findMenuItem.at(index+1).props().value).toEqual(day.name)
            expect(findMenuItem.at(index+1).props().children).toEqual(day.name)
        })

    })
})

describe ('AddInput functions test', () =>{
    test('Checking handleFieldChange', () => {

        const renderedComponent = shallow(<AddInput/>)
        const findTextField = renderedComponent.find(TextField)

        findTextField.simulate('change', { target: { value: 'test', name: 'commitmentInput' }})

        expect(renderedComponent.state().commitmentInput).toEqual('test');
    })
    test('Checking handleCreate ', () => {

        const mockCreateCommitment = jest.fn()
        const event = {preventDefault() {} }

        const renderedComponent = shallow(
        <AddInput
        toCreateCommitment = {mockCreateCommitment}
        />)

        const findButton = renderedComponent.find(Button)

        renderedComponent.setState({commitmentInput: "test", commitmentDay: "test"})
        findButton.simulate('click', event)
        

        expect(renderedComponent.state()).toEqual({commitmentInput: "", commitmentDay: ""});
        expect(mockCreateCommitment).toHaveBeenCalledTimes(1)
        // expect(event).toHaveBeenCalledTimes(1)
    })
})