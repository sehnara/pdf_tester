import React from 'react'
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfView = () =>{

    const source = {uri : 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true};

    return <Pdf 
            source={source} 
            onLoadComplete={(numberOfPages, filePath)=>{console.log(`Number of Pages : ${numberOfPages}`)}} 
            onPageChanged={(page, numberOfPages)=>{console.log(`Current page : ${page}`)}} 
            onError={(error)=>{console.log(error)}}
            onPressLink = {(uri) =>{console.log(`Link pressed : ${uri}`)}}
            style={styles.pdf}
        />
}
const styles = StyleSheet.create({
    pdf: {
        flex:1,
        width:Dimensions.get('window').width-40,
        height:Dimensions.get('window').height-40,
    }
})
export default PdfView;