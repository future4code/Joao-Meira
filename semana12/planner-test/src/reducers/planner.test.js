import { setCommitments } from "../actions/commitments"
import { plannerReducer } from "./planner";


describe('Testing planner Reducer', () => {

    test('SET_COMMITMENTS first action', () => {

        const mockText = 'Ouvir o Foro de Teresina'
        const mockDay = 'domingo'
        const mockCommitments = [
            {
                text: mockText,
                day: mockDay,
            },
        ]

        const mockAction = setCommitments(mockCommitments)

        const mockState = {commitments: []}

        const newState = plannerReducer(mockState, mockAction)

        expect(newState.commitments).toHaveLength(1);
        expect(newState.commitments[0].text).toBe(mockText);
        expect(newState.commitments[0].day).toBe(mockDay)
    });
})
