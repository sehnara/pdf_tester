import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PdfView from "./src/pdf";

export default function App() {
  const onDownLoad = () => {};
  const onShare = () => {};
  const URL = "http://samples.leanpub.com/thereactnativebook-sample.pdf";
  const [page, setPage] = useState([0, 0]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ zIndex: 100 }}>
        <Text>{`${page[0]}/${page[1]} 페이지`}</Text>
      </View>
      <View style={styles.container}>
        <PdfView url={URL} setPage={setPage} />
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 20,

          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={onDownLoad}>
          <Text>다운로드</Text>
        </Pressable>
        <Pressable onPress={onShare}>
          <Text style={{ color: "blue" }}>공유하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(165,165,165)",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
