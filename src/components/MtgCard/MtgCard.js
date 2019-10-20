import React from "react";
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { Card, Image, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  text: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "row"
  }
});

const MtgCard = props => {
  const {
    item: { id, name, type, colors, setName, imageUrl },
    onClick
  } = props;

  const onClickImage = () => {
    onClick && onClick({ imageUrl, color: colors[0] });
  };

  return (
    <Card title={name} key={`card_${id}`}>
      <View style={{ backgroundColor: "transparent", alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={onClickImage}>
          <Image
            style={{ width: 223, height: 310 }}
            PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
            source={{ uri: imageUrl }}
          />
        </TouchableOpacity>
        <View style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Name: </Text>
          <Text>{name}</Text>
        </View>
        <View style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Type: </Text>
          <Text>{type}</Text>
        </View>
        <View style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Colors: </Text>
          {colors.map(color => (
            <Icon
              type="font-awesome"
              name="circle"
              size={17}
              color={color.toLowerCase()}
              iconStyle={{ padding: 1 }}
              key={`color_icon__${id}_${Math.random()}`}
            />
          ))}
        </View>
        <View style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Set name: </Text>
          <Text>{setName}</Text>
        </View>
      </View>
    </Card>
  );
};

export default MtgCard;
