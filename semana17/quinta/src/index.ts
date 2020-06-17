import { 
  postCommentAndRating, 
  addCast,
  getRatings,
  getCast,
  getAverageRating,
  getCastByTitle,
  getFullInfo
} from './queries'


const actionType : string = process.argv[2];


console.log(actionType)
    switch (actionType) {
        case 'POST_COMMENT':
          postCommentAndRating( 
            process.argv[3],
            Number(process.argv[4]),
            process.argv[5],
            )
          break;

        case 'ADD_CAST':
          addCast( 
            process.argv[3],
            process.argv[4],
            )
          break;

        case 'GET_RATING':
          getRatings()
          break;

        case 'GET_CAST':
          getCast()
          break;

        case 'GET_AVERAGE_RATING':
          getAverageRating()
          break;

        case 'GET_CAST_BY_TITLE':
          getCastByTitle()
          break;

        case 'GET_FULL_INFO':
          getFullInfo()
          break;
        
        default:
                console.log('Ação não encontrada!')
            break;
            
    }  