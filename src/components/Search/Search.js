import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 150,
  },
  button: {
    paddingLeft: 4,
  },
});

let searchTerm = "";

const Search = ({ updateSearchCallback, searchCallback, resetCallback }) => {
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
      <TextInput
        placeholder="Find your card!"
        onChangeText={updateSearch}
        style={styles.input}
        onSubmitEditing={onSearch}
      />
      <Button icon={<Icon name="search" size={24} />} onPress={onSearch} containerStyle={styles.button} />
      <Button icon={<Icon name="clear" size={24} />} onPress={resetSearch} containerStyle={styles.button} />
    </View>
  );
};

export default Search;
