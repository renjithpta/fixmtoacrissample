import { readFileSync, writeFileSync } from "fs";
import {transformFixmToAcris} from "fixmtoacrisconverter";
let fixmData = readFileSync('../sample_data/sampledata.xml',"utf8");
let acrisData  = transformFixmToAcris(fixmData);
console.log("Data : ",acrisData);
writeFileSync("./acris_example2.json",JSON.stringify(acrisData));
