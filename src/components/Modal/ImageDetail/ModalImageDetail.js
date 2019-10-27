import React from "react";
import { View, ActivityIndicator, Modal, TouchableHighlight, Dimensions } from "react-native";
import { Image } from "react-native-elements";

const windowDimensions = Dimensions.get("window");

const ModalImageDetail = ({ imageDetail, visible, onClose, styles }) => {
  const viewStyles = {
    flex: 1,
    top: 0,
    left: 0,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: windowDimensions.width,
    height: windowDimensions.height,
    ...styles,
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      animationType={"slide"}
      style={styles}
      onRequestClose={onClose}
    >
      <TouchableHighlight onPress={onClose} style={viewStyles}>
        <View>
          <Image
            style={{ width: 223, height: 310 }}
            PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
            source={{ uri: imageDetail }}
          />
        </View>
      </TouchableHighlight>
    </Modal>
  );
};

export default ModalImageDetail;
