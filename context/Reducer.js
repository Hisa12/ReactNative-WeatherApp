//Create a reducer function that handles ADD and REMOVE actions in the WatchList
export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchList: [action.payLoad, ...state.watchList],
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (item) => item.location.name !== action.payLoad
        ),
      };

    default:
      return state;
  }
};
