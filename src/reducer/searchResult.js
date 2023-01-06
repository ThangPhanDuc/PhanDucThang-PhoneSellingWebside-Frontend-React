const searchResultInit = "";


const searchResult = (state = searchResultInit, action) => {
    switch (action.type) {
        case "searchProduct":
            state = action.search.dataSearch;
            return state;
        default:
            return state;
    }
}

export default searchResult;