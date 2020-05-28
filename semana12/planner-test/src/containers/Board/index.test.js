import { shallow } from "enzyme"
import { Board, BoardWrapper, CommitmentsList, daysOfTheWeek, commitmentsPerDay } from "."
import React from 'react'



describe('Board container',() => {
    test(' of subcomponents', () => {

        const mockFunction = jest.fn()
        const renderedComponent = shallow(<Board toGetCommitments={mockFunction}/>)

        const findBoardWrapper = renderedComponent.find(BoardWrapper)
        const findCommitmentsList = renderedComponent.find(CommitmentsList)

        expect(findBoardWrapper).toHaveLength(1);
        expect(findCommitmentsList).toHaveLength(7);
    })
    test('of commitments component', () => {

        const mockFunction = jest.fn()
        const renderedComponent = shallow(<Board toGetCommitments={mockFunction}/>)

        const findCommitmentsList = renderedComponent.find(CommitmentsList)


        daysOfTheWeek.map((day, index) => {
        expect(findCommitmentsList.at(0).props().children).toEqual([<p>Segunda-Feira</p>, <ul><span>Carregando...</span></ul>])
        expect(findCommitmentsList.at(1).props().children).toEqual([<p>Terça-Feira</p>, <ul><span>Carregando...</span></ul>])
        expect(findCommitmentsList.at(2).props().children).toEqual([<p>Quarta-Feira</p>, <ul><span>Carregando...</span></ul>])
        })
    })
})
