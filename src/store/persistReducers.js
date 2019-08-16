import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "go_barber",
      storage,
      whitelist: ["auth", "user"]
    },
    reducers
  );

  return persistedReducer;
};
