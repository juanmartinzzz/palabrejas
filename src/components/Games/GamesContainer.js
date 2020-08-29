import React, { useEffect } from "react";
import { withFirebase } from "../FirebaseContext";
import Games from "./Games";

const GamesContainer = ({ storeAndActions, firebase }) => {
  useEffect(() => {
    const unsubscribeToListener = firebase.onCollection({
      path: "games", 
      orderBy: ["created-desc"],
      onSnapshot: storeAndActions.gamesOnFirestoreChange
    })

    return () => unsubscribeToListener();
  }, [])

  return <Games storeAndActions={storeAndActions} />;
}

export default withFirebase(GamesContainer);