import React,{ useState,useEffect } from 'react'
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfView = (props) =>{
    const {url, setPage} = props;
    const source = {uri : url, cache: true};

    const [pages, setPages] = useState(0);
    const [totalPages, setTotalPages]=useState(0);

    useEffect(()=>{
        setPage([pages, totalPages]);
    },[pages,totalPages])

    return <View>
        <Pdf 
            source={source} 
            onLoadComplete={(numberOfPages, filePath)=>{
                console.log(`Number of Pages : ${numberOfPages}`);
                setTotalPages(numberOfPages);
            }} 
            onPageChanged={(page, numberOfPages)=>{
                console.log(`Current page : ${page}`)
                setPages(page)
            }} 
            onError={(error)=>{console.log(error)}}
            onPressLink = {(uri) =>{console.log(`Link pressed : ${uri}`)}}
            style={styles.pdf}
        />
    </View>
}
const styles = StyleSheet.create({
    pdf: {
        flex:1,
        width:Dimensions.get('window').width-40,
        height:Dimensions.get('window').height-40,
    }
})
export default PdfView;