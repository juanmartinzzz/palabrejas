import { setLocalStorageItem, getLocalStorageItemV2 } from "../services/localStorage/localStorage";

export const initialStateStore = {
  games: [],
};

export const getStoreAndActions = ({ storeAndSetStore }) => {
  const [store, setStore] = storeAndSetStore;

  const getLocalStorageStore = () => getLocalStorageItemV2({ name: "store" });

  const updateStoreAndLocalStorage = store => {
    setStore(store);
    setLocalStorageItem("store", store);
  };

  const updateProperty = (propertyName, value) => {
    updateStoreAndLocalStorage({ ...getLocalStorageStore(), [propertyName]: value });
  };

  /**
   * games actions
   */

  const gamesOnFirestoreChange = (games) => {
    updateProperty("games", games)
  }

  return {
    store,
    gamesOnFirestoreChange
  };
};
