import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";
// import path from 'path';

// const filePath = path.join(__dirname, '../output/tabla-5.txt');

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if(err) {
//     console.log('Error al leer el archivo', err);
//     return;
//   }
//   console.log(data);
// })

const {b:base, l:limit  ,s:showTable } = yarg;

console.log(yarg)

let outputMessage = '';
const headerMessage = `
=======================
    Tabla del ${base}
=======================\n
`;

for (let i = 1; i <= limit; i++) {
  const result = base * i;
  outputMessage += `${base} x ${i} = ${result}\n`;
}

outputMessage = headerMessage + outputMessage;

if( showTable ) console.log(outputMessage);

const outputPath = `output`;

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created') 