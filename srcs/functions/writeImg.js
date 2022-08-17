
import RNPhotoManipulator from 'react-native-photo-manipulator';
import imgggg from '../imgs/x.png'

const writeImg =(navigation,img_url,tdata,width,height)=>{
    console.log(tdata)
    const texts = [
        { position: { x: 50, y: 30 }, text: "Text 1", textSize: 30, color: 'red' },
        { position: { x: 400, y: 30 }, text: "Text 333", textSize: 30, color: "#FFFFFF", thickness: 3 }
    ];
    const textss=[]
    tdata.map((item)=>{
        const temp ={ position: { x:((item['coordinates']['x']*width)) , y:((item['coordinates']['y']*height)+((item['coordinates']['h']*height)/2))}, text: item["OCRResp"], textSize: 20, color: "#000000" }
        textss.push(temp)
    })
    console.log(textss,'====')
    
    // RNPhotoManipulator.printText(img_url, textss).then(path => {
    //     console.log(`Result image path: ${path}`);
    //     navigation.navigate('ImageDis', { path:path});
    // });

    const image = "https://unsplash.com/photos/qw6qQQyYQpo/download?force=true";
        const overlay = imgggg;
        const position = { x: 5, y: 20 ,width:900,height:200};

        RNPhotoManipulator.overlayImage(img_url, overlay, position).then(path => {
            console.log(`Result image path: ${path}`);
            navigation.navigate('ImageDis', { path:path});
        });

}

export default writeImg;