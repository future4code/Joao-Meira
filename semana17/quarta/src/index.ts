import { 
  getActorByIdBuild, 
  getActorByNameBuild, 
  genderCountBuild, 
  updateSalaryBuild,
  deleteActorBuild,
  avgGenderSalaryBuild
} from './queries'


const actionType : string = process.argv[2];


console.log(actionType)
    switch (actionType) {
        case 'GET_ACTOR_ID':
          getActorByIdBuild( process.argv[3] )
          break;
        
        case 'GET_ACTOR_NAME':
          getActorByNameBuild( process.argv[3] )
          break;
        
        case 'GENDER_COUNT':
          genderCountBuild( process.argv[3] )
          break;
        
        case 'UPDATE_SALARY':
          updateSalaryBuild( 
            process.argv[3],
            Number(process.argv[4]), 
            )
          break;
        
        case 'DELETE_ACTOR':
          deleteActorBuild( process.argv[3] )
          break;
        
        case 'AVG_GENDER_SALARY':
          avgGenderSalaryBuild( process.argv[3] )
          break;
            
        default:
                console.log('Ação não encontrada!')
            break;
            
    }  