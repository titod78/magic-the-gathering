import React from "react";
import { View } from "react-native";
import Main from "./src/screens/Main/Main";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Main key="main" />
    </View>
  );
}
