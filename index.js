const fs = require('fs').promises;
const argument = process.argv.slice(2);



async function readFile(file) {
    const data = await fs.readFile(file)
    console.log(data.toString());
}

console.log(readFile('spesa.txt'));

async function writeFile (file, content) {
    await fs.writeFile(file, content)
}


const content = `
item: ${argument[0]},
quantity: ${argument[1]}
`


// fs.readFile()
 fs.writeFile('spesa.txt', content, { flag: 'a+' }) 