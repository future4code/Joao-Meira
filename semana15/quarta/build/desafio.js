const sayHello = (helloMessage) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (helloMessage) {
                resolve(console.log(helloMessage));
            }
            else {
                reject('No cookies for ya');
            }
        }, 5000);
    });
};
sayHello('oi');
//# sourceMappingURL=desafio.js.map