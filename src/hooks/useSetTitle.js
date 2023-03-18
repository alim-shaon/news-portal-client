import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-FyreStorm News`;
  }, [title]);
};

export default useSetTitle;
