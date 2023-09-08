const initialState = {
  isToken: true,
  isPair: false,
  tokenData: [],
  pairData: [],
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case "ISTOKEN": {
      return { ...state, isToken: true, isPair: false };
    }
    case "ISPAIR": {
      return { ...state, isToken: false, isPair: true };
    }
    case "TOKENDATA": {
      return { ...state, tokenData: action.payload };
    }
    case "PAIRDATA": {
      return { ...state, pairData: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
