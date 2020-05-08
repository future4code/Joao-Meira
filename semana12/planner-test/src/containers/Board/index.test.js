import { shallow } from "enzyme"
import { Board, BoardWrapper, CommitmentsList, daysOfTheWeek } from "."
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
})

