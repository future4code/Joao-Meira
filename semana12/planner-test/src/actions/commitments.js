import axios from 'axios'


export const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/joao-meira'



export const setCommitments = (commitments) => ({
    type: 'SET_COMMITMENTS',
    payload: { commitments }
})


export const toGetCommitments = () => async (dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}`)
        dispatch(setCommitments(response.data))
    }catch (error) {
        console.error(error)
    }
}

export const toCreateCommitment = (day, text) => async (dispatch) => {

    const body = {
        day: day,
        text: text
    }

    try{
        await axios.post(`${baseUrl}`, body)
        dispatch(toGetCommitments())
    }catch (error) {
        console.error(error)
    }
}
