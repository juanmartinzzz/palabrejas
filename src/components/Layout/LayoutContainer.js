import React, { useState } from "react";
import Layout from "./Layout";
import { getLocalStorageItemV2 } from "../../services/localStorage/localStorage";
import { initialStateStore, getStoreAndActions } from "../../state/store";

const LayoutContainer = () => {
  const storeAndSetStore = useState(
    getLocalStorageItemV2({
      name: "store",
      defaultValue: initialStateStore,
      flush: false
    })
  );
  const storeAndActions = getStoreAndActions({ storeAndSetStore });

  return <Layout storeAndActions={storeAndActions} />
};

export default LayoutContainer;