import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  buttons: {
    padding: 2
  }
});

let searchTerm = "";

const Search = props => {
  const { updateSearchCallback, searchCallback, resetCallback } = props;

  function updateSearch(term = "") {
    searchTerm = term;
    updateSearchCallback(term);
  }

  function onSearch() {
    searchTerm !== "" && searchCallback();
  }

  function resetSearch() {
    searchTerm = "";
    resetCallback();
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput placeholder={searchTerm || `Find your card!`} onChangeText={updateSearch} style={{ borderWidth: 1 }} />
      <Button icon={<Icon name="search" size={12} />} onPress={onSearch} style={styles.buttons} />
      <Button icon={<Icon name="clear" size={12} />} onPress={resetSearch} style={styles.buttons} />
    </View>
  );
};

export default Search;
