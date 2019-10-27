import { useState, useEffect } from "react";

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    isFetching && callback();
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
