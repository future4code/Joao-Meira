import { setAllPosts } from "../actions/post"
import posts from "./posts"
import { setPostDetails } from "../actions/postDetails"


describe('Testing posts Reducer', () => {

    test('SET_ALL_POSTS first action', () => {

        const mockText = 'Mas Dr. Eu sou o Pagliacci...'
        const mockTitle = 'A piada'
        const mockAllPosts = [
            {
                text: mockText,
                title: mockTitle,
            },
        ]

        const mockAction = setAllPosts(mockAllPosts)

        const mockState = {allPosts: []}

        const newState = posts(mockState, mockAction)

        expect(newState.allPosts).toHaveLength(1);
        expect(newState.allPosts[0].text).toBe(mockText);
        expect(newState.allPosts[0].title).toBe(mockTitle)
    })

    test('SET_ALL_POSTS recurring action', () => {

        const mockText = 'Mas Dr. Eu sou o Pagliacci...'
        const mockTitle = 'A piada'
        const mockAllPosts = [
            {
                text: mockText,
                title: mockTitle,
            },
        ]

        const mockAction = setAllPosts(mockAllPosts)

        const mockState = {
            selectedPostId:"42",
            toRenderSignUp: false,
        }

        const newState = posts(mockState, mockAction)

        expect(newState.selectedPostId).toBe(mockState.selectedPostId);
        expect(newState.toRenderSignUp).toBe(mockState.toRenderSignUp);
    })


    
    test('SET_POST_DETAILS first action', () => {

        const mockPostDetails =
        {
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
          };


        const mockAction = setPostDetails(mockPostDetails)

        const mockState = {postDetails: []}

        const newState = posts(mockState, mockAction)

        expect(newState.postDetails.comments).toBe(mockPostDetails.comments);
        expect(newState.postDetails.comments[0]).toBe(mockPostDetails.comments[0])
        expect(newState.postDetails.comments[0].username).toBe(mockPostDetails.comments[0].username)
    })

    test('SET_POST_DETAILS recurring action', () => {


        const mockPostDetails =
        {
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
          };


        const mockAction = setPostDetails(mockPostDetails)

        const mockState = {
            postDetails:[],
            selectedPostId: "123456778",
            toRenderSignUp: undefined,
            allPosts: [],
        }

        const newState = posts(mockState, mockAction)

        expect(newState.selectedPostId).toBe(mockState.selectedPostId);
        expect(newState.toRenderSignUp).toBe(mockState.toRenderSignUp);
        expect(newState.allPosts).toBe(mockState.allPosts);
    })
})

