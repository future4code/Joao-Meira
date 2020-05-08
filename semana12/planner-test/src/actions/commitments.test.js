import axios from "axios"
import { toGetCommitments, setCommitments, toCreateCommitment, baseUrl } from "./commitments"

describe('Testing Set Commitment', () => {
    test('setting commitments after getting from API', () => {
        const mockCommitments = [
            {
                id: 'apaoiwer53',
                day: 'terça-feira',
                text: 'You shall not not pass!'
            },
            {
                id: 'saa4ettgas4665',
                day: 'quinta-feira',
                text: 'O QI DELE EH ACIMA DE 5k!'
            }
        ] 

        const action = setCommitments(mockCommitments)

        expect(action.type).toBe('SET_COMMITMENTS')
        expect(action.payload.commitments).toBe(mockCommitments)    
    })
})

describe('Create Commitment Action', () => {
    test ('create commitment', async () => {
        
        const day = 'segunda-feira'
        const text = 'Comprar Laranja'

        axios.post = jest.fn()
        const dispatch = jest.fn()

        await toCreateCommitment(day, text)(dispatch)

        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith(baseUrl, {day,text})
    })
    test ('create commitment error', async () => {
        
        const day = 'segunda-feira'
        const text = 'Comprar Laranja'
        const mockError = new Error('Perdeu tudo!')

        console.error = jest.fn()

        axios.post = jest.fn(() => {
            throw mockError
        })

        const dispatch = jest.fn()

        await toCreateCommitment(day, text)(dispatch)

        expect(dispatch).not.toHaveBeenCalled()
        expect(console.error).toHaveBeenCalledWith(mockError)
    })
})

describe('To get commitments Action',  () => {
    test ('get commitments list', async () => {
        
        axios.get = jest.fn( async () => ({
            data: 
            [
                {
                    id: 'apaoiwer53',
                    day: 'terça-feira',
                    text: 'You shall not not pass!'
                },
                {
                    id: 'saa4ettgas4665',
                    day: 'quinta-feira',
                    text: 'O QI DELE EH ACIMA DE 5k!'
                }
            ]
        }))

        const dispatch = jest.fn()

        await toGetCommitments()(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
            type: 'SET_COMMITMENTS',
            payload: {
            commitments: [
            {
                id: 'apaoiwer53',
                day: 'terça-feira',
                text: 'You shall not not pass!'
            },
            {
                id: 'saa4ettgas4665',
                day: 'quinta-feira',
                text: 'O QI DELE EH ACIMA DE 5k!'
            }
        ]
        }})
    })
})