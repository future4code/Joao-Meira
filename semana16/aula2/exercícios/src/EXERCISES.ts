//EXERCÍCIO 1
//A.
// Não. A senha não poderá ser impressa por ser uma variável classificada como private,
// sem a existência de um método da classe que permita acessar o valor.
//B. Uma vez

//EXERCICIO 2
//A. & B.
//Cada uma das mensagens é impressa uma vez. Isso ocorre pela chamada do construtor da classe
//pai através do comando super(), que passa ao construtor da classe filha em seguida.

//EXERCÍCIO 3
//A.
//Não. Primeiramente porque o atributo é privado e, por isso, só pode ser acessador através de funções dentro da classe pai.
//Além disso, não há qualquer método na classe pai que possibilite o acesso à essa informação.

//EXERCÍCIO 4
//

//EXERCÍCIO 5
//

//EXERCÍCIO 6
//A.Uma vez.
//B. Todas as informações da classe, com exceção de password;

//EXERCÍCIO 7


//EXERCÍCIO 8
//A.Os mesmos parâmetros necessários na classe EmployeeExercise
//B. Todas as informações da classe, com exceção de password. Isso continua acontecendo por password ser um atributo privado sem uma
//função que permita acessá-la na classe pai.

//EXERCICIO 9
//A. Não, pois é um atributo privado e não há nenhum método que me permita ler seu valor.

//EXERCICIO 10
//A. O terminal imprime o valor do salário total, que agora está acrescido do valor das comissões de cada venda.





class UserExercise {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe UserExercise")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

    //   public introduceSelf() : string {
    //       return "Olá, bom dia!"
    //   }
      public introduceSelf() : string {
          return `Olá! Eu sou o ${this.getName()}. Bom dia!`
      }
  }

// const userExercise1 = new UserExercise('1', 'teste@email.com', 'Frodo', '123456')

class CustomerExercise extends UserExercise {
    public purchaseTotal: number = 2000;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe CustomerExercise");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

//   const userExercise2 = new CustomerExercise('2', 'teste2@gmail.com', 'Sam', '123456', '00112233')
//   console.log(userExercise2.getId(), userExercise2.getEmail(), userExercise2.getName(), userExercise2.getCreditCard(), userExercise2.purchaseTotal)
//   console.log(userExercise2.introduceSelf())


  class EmployeeExercise extends UserExercise {
    protected admissionDate: string;
    protected baseSalary: number;
    static BENEFITS_VALUE : number = 400;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      admissionDate: string,
      baseSalary: number,
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe EmployeeExercise");
      this.admissionDate = admissionDate;
      this.baseSalary = baseSalary;
    }
  
    public getAdmissionDate(): string {
      return this.admissionDate;
    }
    public getBaseSalary(): number {
      return this.baseSalary;
    }
    public calculateTotalSalary() : number {
        return ( this.baseSalary + EmployeeExercise.BENEFITS_VALUE )
    }
  }

// const userExercise3 = new EmployeeExercise( `${Date.now()}`, 'teste3@gmail.com', 'Gandalf', '123456', "21/12/1300", 3000 )
// console.log(userExercise3.getId(), userExercise3.getEmail(), userExercise3.getName(), userExercise3.getAdmissionDate(), userExercise3.getBaseSalary(), userExercise3.calculateTotalSalary())

class SellerExercise extends EmployeeExercise {
    private salesQuantity : number = 0;
    static SALES_COMISSION : number = 5;

    setSalesQuantity(quantity : number) {
        return this.salesQuantity += quantity
    }

    calculateTotalSalary() {
        return (this.baseSalary + SellerExercise.BENEFITS_VALUE + (this.salesQuantity * SellerExercise.SALES_COMISSION))
    }
}

const userExercise4 = new SellerExercise( `${Date.now()}`, 'teste3@gmail.com', 'Sauron', '123456', "21/12/1400", 3000 )
console.log(userExercise4.getId())
console.log(userExercise4.calculateTotalSalary())
console.log(userExercise4.getEmail())
console.log(userExercise4.getName())
console.log( userExercise4.getAdmissionDate())
console.log( userExercise4.getBaseSalary())
console.log( userExercise4.setSalesQuantity(100))
console.log( userExercise4.calculateTotalSalary() )