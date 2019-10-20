import { useState, useEffect } from "react";

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    isFetching && callback();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      setIsFetching(true);
    }
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
