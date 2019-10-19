import React from "react";
import { View, ActivityIndicator, Modal, TouchableHighlight } from "react-native";
import { Image } from "react-native-elements";

const ModalImageDetail = props => {
  const { imageDetail, visible, onClose, styles } = props;
  return (
    <TouchableHighlight onPress={onClose}>
      <Modal animationType="slide" transparent={false} visible={visible} animationType={"slide"} style={styles}>
        <View>
          <Image
            style={{ width: 223, height: 310 }}
            PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
            source={{ uri: imageDetail }}
          />
        </View>
      </Modal>
    </TouchableHighlight>
  );
};

export default ModalImageDetail;
