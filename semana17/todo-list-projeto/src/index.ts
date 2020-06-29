import { 
  createUser, 
  getUserById
} from './queries'


const actionType : string = process.argv[2];


console.log(actionType)
    switch (actionType) {
      
        case 'CREATE_USER':
          createUser( 
            process.argv[3],
            process.argv[4],
            process.argv[5],
            )
          break;

        case 'GET_USER_BY_ID':
          getUserById( 
            process.argv[3]
            )
          break;

            

        default:
                console.log('Ação não encontrada!')
            break;
            
    }  