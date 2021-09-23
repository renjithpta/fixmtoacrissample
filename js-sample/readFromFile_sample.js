const { readFileSync,writeFileSync } = require('fs');
let parser = require('fixmtoacrisconverter');

let fixmData = readFileSync('../sample_data/sampledata.xml',"utf8");
let acrisData  = parser.transformFixmToAcris(fixmData);
console.log("Data : ",acrisData);
writeFileSync("./acris_example2.json",JSON.stringify(acrisData));