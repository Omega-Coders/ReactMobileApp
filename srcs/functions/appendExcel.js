import XLSX from 'xlsx';
import * as FileSystem from  'react-native-fs'
import React from 'react';
import writeExcel from './writeExcel';



 const appendExcel = async(data) => {
   
    
    const uri = FileSystem.ExternalDirectoryPath + 'marks.xlsx';
    
    const bstr = await FileSystem.readFile(uri, "ascii");
    const workbook = XLSX.read(bstr, {type: "binary"});
    
     //const  wks = XLSX.utils.aoa_to_(cars)
     const ws = workbook.Sheets["sheet-1"]
     const json_file = XLSX.utils.sheet_to_json(ws);
     //console.log(json_file)
     json_file.push(data)
     console.log(json_file)
     writeExcel(json_file);
   

  }

  export default appendExcel;