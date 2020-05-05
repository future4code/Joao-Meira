import { setAllPosts, setPostDetails } from "./post"


describe('setAllPosts action test', () => {
    test('testing empty array action', () => {
        
        const mockAllPosts = []

        const action = setAllPosts(mockAllPosts)

        expect(action.type).toBe('SET_ALL_POSTS')
        expect(action.payload.allPosts).toBe(mockAllPosts)
    });

    test('testing array with elements action', () => {

        const mockText = 'Mas Dr. Eu sou o Pagliacci...'
        const mockTitle = 'A piada'
        const mockAllPosts = [
            {
                text: mockText,
                title: mockTitle,
            },
        ]

        const action = setAllPosts(mockAllPosts)

        expect(action.type).toBe('SET_ALL_POSTS')
        expect(action.payload.allPosts).toBe(mockAllPosts)
    }) 
})

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
            "post": {
              "comments": [
                {
                  "votesCount": -1,
                  "userVoteDirection": -1,
                  "id": "1234",
                  "username": "SrKaio",
                  "text": "Goku!"
                },
                {
                  "votesCount": 0,
                  "userVoteDirection": 0,
                  "id": "123456",
                  "username": "Gandalf",
                  "text": "All we have to decide is what to do with the time that is given us."
                }
              ],
              "votesCount": 1,
              "userVoteDirection": 1,
              "commentsNumber": 2,
              "id": "12345667",
              "username": "Saitama",
              "text": "Só eu me entedio com essa sociedade consumista?"
            }
          };
          
          

        const action = setPostDetails(mockPostDetails)

        expect(action.type).toBe('SET_POST_DETAILS')
        expect(action.payload.postDetails).toBe(mockPostDetails)
    }) 
})

