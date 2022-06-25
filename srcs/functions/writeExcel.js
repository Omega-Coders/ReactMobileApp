

 import XLSX from 'xlsx';
 import * as FileSystem from  'react-native-fs'
 import React from 'react';

  const writeExcel = (data) => {
    

    
    var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
   // console.log(wb,'+++')
    XLSX.utils.book_append_sheet(wb, ws, "sheet-1");
    const wbout = XLSX.write(wb, {
        type: 'base64',
        bookType: "xlsx"
     });
    const uri = FileSystem.ExternalDirectoryPath + 'marks.xlsx';
    console.log(uri);
   // console.log(`Writing to ${JSON.stringify(uri)} with text: ${wbout}`);
    FileSystem.writeFile(uri, wbout,'base64').then(res=>{
      console.log('writing success')
    }).catch(err=>{
      console.log(err,'**');
    })
   

  }

  export default writeExcel;