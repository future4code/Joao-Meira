import { setPostDetails } from "./postDetails"

describe('setPostDetails action test', () => {
    test('testing empty array action', () => {
        
        const mockPostDetails = []

        const action = setPostDetails(mockPostDetails)

        expect(action.type).toBe('SET_POST_DETAILS')
        expect(action.payload.postDetails).toBe(mockPostDetails)
    });

    test('testing array with elements action', () => {

        const mockPostDetails = 
        {
            post: {
              comments: [
                {
                  votesCount: -1,
                  userVoteDirection: -1,
                  id: "1234",
                  username: "SrKaio",
                  text: "Goku!"
                },
                {
                  votesCount: 0,
                  userVoteDirection: 0,
                  id: "123456",
                  username: "Gandalf",
                  text: "All we have to decide is what to do with the time that is given us."
                }
              ],
              votesCount: 1,
              userVoteDirection: 1,
              commentsNumber: 2,
              id: "12345667",
              username: "Saitama",
              text: "Só eu me entedio com essa sociedade consumista?"
            }
          };
          
          

        const action = setPostDetails(mockPostDetails)

        expect(action.type).toBe('SET_POST_DETAILS')
        expect(action.payload.postDetails).toBe(mockPostDetails)
    }) 
})

