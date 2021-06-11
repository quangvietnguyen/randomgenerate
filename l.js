const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

const lotto = (number, total) => {
    const slot = [];
    for (let i=1;i<=total;i++){
        slot.push(i)
    }
    let count = 0;
    let winning = [];
    while(count<number){
        let arrayLength = slot.length;
        let index = getRandomInt(arrayLength);
        winning.push(slot[index]);
        slot.splice(index,1);
        count++;
    }
    return winning.sort((a,b) => a-b);
}

const dailygrand = () => {
    const slot = [];
    for (let i=1;i<=49;i++){
        slot.push(i)
    }
    let count = 0;
    let winning = [];
    while(count<5){
        let arrayLength = slot.length;
        let index = getRandomInt(arrayLength);
        winning.push(slot[index]);
        slot.splice(index,1);
        count++;
    }
    winning.sort((a,b) => a-b);
    winning.push(lotto(1,7));
    return winning;
}

readline.question('What kind of Lotto?\n(lottomax(m)/lotto649(l)/ontario49(o)/dailygrand(g)/dailykeno_(d_))\n', name => {
    console.log(`You chose ${name}`);
    readline.close();
    const main = (name,time) => {
        if ((name === 'lottomax') || (name === 'm')) {
            setInterval(() => {
                fs.appendFile('results/max.txt',lotto(7,50) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'lotto649') || (name === 'l') || (name === 'ontario49') || (name === 'o')) {
            setInterval(() => {
                fs.appendFile('results/649.txt',lotto(6,49) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailygrand') || (name === 'g')) {
            setInterval(() => {
                fs.appendFile('results/grand.txt',dailygrand() + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno2') || (name === 'd2')) {
            setInterval(() => {
                fs.appendFile('results/keno2.txt',lotto(2,15) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno3') || (name === 'd3')) {
            setInterval(() => {
                fs.appendFile('results/keno3.txt',lotto(3,15) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno4') || (name === 'd4')) {
            setInterval(() => {
                fs.appendFile('results/keno4.txt',lotto(4,20) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno5') || (name === 'd5')) {
            setInterval(() => {
                fs.appendFile('results/keno5.txt',lotto(5,25) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno6') || (name === 'd6')) {
            setInterval(() => {
                fs.appendFile('results/keno6.txt',lotto(6,28) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno7') || (name === 'd7')) {
            setInterval(() => {
                fs.appendFile('results/keno7.txt',lotto(7,30) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno8') || (name === 'd8')) {
            setInterval(() => {
                fs.appendFile('results/keno8.txt',lotto(8,35) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno9') || (name === 'd9')) {
            setInterval(() => {
                fs.appendFile('results/keno9.txt',lotto(9,37) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else if ((name === 'dailykeno10') || (name === 'd10')) {
            setInterval(() => {
                fs.appendFile('results/keno10.txt',lotto(10,40) + " \n" + Date().toString() + "\n",(err) => {
                    if (err) throw err;
                    console.clear();
                    console.log(Date(),"\nProgram is running...\nPress ^ + c to exit the program!");
                })
            },time);
        } else {
            console.log(`${name} is incorrect. Please retype the name.`);
        }
    }
    main(name,1000);
})
