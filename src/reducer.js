export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  // token:
  //   "BQA_Tl_AacVdd_pNbykCm5BZ14C7-svKG4zN1q-bR2o8e-RlFm6wz5xGIPPZ3Iwzubv23b1mu_QSYtgLsO5zouvf8mzrDcaPG39Smz75AFuawtMR96e3UJxJZ0V8CYZJZnx39SjrTMdITTpTS0dtjR7oa6byRpalnk2xLTIhKJWDU-n",
};

const reducer = (state, action) => {
  //   console.log(action);
  //action -> type, [payload] ( payload is dynamic )

  switch (action.type) {
    //case dispatching user => action -> type, user
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
