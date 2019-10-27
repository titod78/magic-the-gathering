import React from "react";
import { View, Text, Modal, TouchableHighlight } from "react-native";

const Modalerror = ({ text, visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      animationType={"slide"}
      style={{ width: 250, height: 120, justifyContent: "center" }}
    >
      <View>
        <Text>{text}</Text>
        <TouchableHighlight onPress={onClose}>
          <Text>Close</Text>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

export default Modalerror;
