

const sayHello = (helloMessage : string) : any => {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        if (helloMessage) {
          resolve(console.log(helloMessage))
        } else {
          reject('No cookies for ya')
        }
      }, 5000)
    })
  }

  sayHello('oi')