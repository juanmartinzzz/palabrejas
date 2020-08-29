import { setLocalStorageItem, getLocalStorageItemV2 } from "../services/localStorage/localStorage";
import { createToken } from "../services/tokenGenerator/tokenGenerator";

export const initialStateStore = {
  games: [],
  currentGame: null,
};

const generateInitialStateGame = () => ({
  id: createToken({length: 24}),
})

export const getStoreAndActions = ({ storeAndSetStore, firebase }) => {
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

  const newGame = (word) => {
    if(word !== "") {
      const game = generateInitialStateGame();
  
      firebase.setV2({
        path: "games",
        document: game.id,
        data: {...game, word},
      }); 
    }
  }

  return {
    store,
    newGame,
    gamesOnFirestoreChange
  };
};
