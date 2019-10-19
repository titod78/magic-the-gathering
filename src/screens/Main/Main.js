import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, ActivityIndicator, Dimensions } from "react-native";
import { Button, Icon } from "react-native-elements";
import List from "../../components/List/List";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { getMtgData } from "../../services/mtgService";
import ModalError from "../../components/Modal/Error/ModalError";
import ModalImageDetail from "../../components/Modal/ImageDetail/ModalImageDetail";

const windowDimensions = Dimensions.get("window");

export default function App() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImageDetailModalVisible, setIsImageDetailModalVisible] = useState(false);
  const [imageDetail, setImageDetail] = useState(null);
  const [backgorundColorDetail, setBackgorundColorDetail] = useState("#fff");
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    const fetchData = async () => {
      try {
        const result = await getMtgData(page, searchTerm);
        const cards = result.cards;
        if (!cards) return;
        setList([...list, ...cards]);
        setPage(page + 1);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
      setIsFetching(false);
    };
    fetchData();
  }

  useEffect(() => {
    if (page === 1 && searchTerm === "" && !isFetching) {
      onSearch();
      setPage(page + 1);
    }
  }, [page]);

  function onCloseModalError() {
    setIsModalVisible(false);
  }

  function onCloseImageDetailModal() {
    document && (document.body.style.overflow = "auto");
    setIsImageDetailModalVisible(false);
  }

  function onCardClick(cardData) {
    const color = cardData.color ? cardData.color.toLowerCase() : backgorundColorDetail;
    document && (document.body.style.overflow = "hidden");
    setImageDetail(cardData.imageUrl);
    setBackgorundColorDetail(color);
    setIsImageDetailModalVisible(true);
  }

  function updateSearch(term = "") {
    setPage(1);
    setSearchTerm(term);
  }

  async function onSearch(p = page, s = searchTerm) {
    setIsSearching(true);
    const result = await getMtgData(p, s);
    const cards = result.cards;
    if (!cards) return;
    setList([]);
    setList([...cards]);
    setIsSearching(false);
    searchTerm !== "" && setPage(p + 1);
  }

  function resetSearch() {
    if (searchTerm !== "") {
      updateSearch("");
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    imagePopup: {
      top: 0,
      left: 0,
      position: "fixed",
      backgroundColor: backgorundColorDetail,
      width: windowDimensions.width,
      height: windowDimensions.height,
      alignItems: "center",
      justifyContent: "center"
    },
    buttons: {
      padding: 2
    }
  });

  return (
    <View style={styles.container}>
      {!isLoading && !isSearching && (
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder={searchTerm || `Find your card!`} onChangeText={updateSearch} />
          <Button
            icon={<Icon name="search" size={12} />}
            onPress={() => searchTerm !== "" && onSearch()}
            style={styles.buttons}
          />
          <Button icon={<Icon name="clear" size={12} />} onPress={resetSearch} style={styles.buttons} />
        </View>
      )}
      {isLoading || isSearching ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : list.length ? (
        <List items={list} onClick={onCardClick} />
      ) : (
        !isModalVisible && <ModalError text="No results found" visible={isModalVisible} onClose={onCloseModalError} />
      )}
      {isFetching && !isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {isImageDetailModalVisible && (
        <ModalImageDetail
          imageDetail={imageDetail}
          visible={isImageDetailModalVisible}
          onClose={onCloseImageDetailModal}
          styles={styles.imagePopup}
        />
      )}
      {error !== null && <ModalError text={error} visible={isModalVisible} onClose={onCloseModalError} />}
    </View>
  );
}
