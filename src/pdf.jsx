import React from 'react'
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfView = () =>{

    const source = {uri : 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true};

    return <View>
        <Pdf 
            source={source} 
            onLoadComplete={(numberOfPages, filePath)=>{console.log(`Number of Pages : ${numberOfPages}`)}} 
            onPageChanged={(page, numberOfPages)=>{console.log(`Current page : ${page}`)}} 
            onError={(error)=>{console.log(error)}}
            onPressLink = {(uri) =>{console.log(`Link pressed : ${uri}`)}}
            style={styles.pdf}
        />
    </View>
}
const styles = StyleSheet.create({
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})
export default PdfView;