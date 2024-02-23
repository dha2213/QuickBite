// export function filterData(searchText, restaurants) {
//   console.log("searchText: " + searchText);
//   return restaurants.filter((restaurant) => {
//     const name = restaurant?.info?.name?.toLowerCase();
    
//     // Check if the restaurant name includes the search text or vice versa
//     const includesSearchText = name.includes(searchText.toLowerCase()) || searchText.toLowerCase().includes(name);
//     // Check if the restaurant name starts with the search text
//     const startsWithSearchText = name.startsWith(searchText.toLowerCase());
//     // Check if the restaurant name contains words that start with the search text
//     const containsWordsStartingWithSearchText = name.split(' ').some(word => word.startsWith(searchText.toLowerCase()));
//     return includesSearchText || startsWithSearchText || containsWordsStartingWithSearchText;
//   });
// }

export function filterDataCategories(searchText, restaurants) {
    console.log("searchText: " + searchText);
  
    return restaurants.filter((restaurant) => {
      const cuisines = restaurant.info.cuisines;
      const name = restaurant?.info?.name?.toLowerCase();
  
      // Check if the restaurant name includes the search text or vice versa
      const includesSearchTextInName = name.includes(searchText.toLowerCase()) || searchText.toLowerCase().includes(name);
      // Check if the restaurant name starts with the search text
      const startsWithSearchTextInName = name.startsWith(searchText.toLowerCase());
      // Check if the restaurant name contains words that start with the search text
      const containsWordsStartingWithSearchTextInName = name.split(' ').some(word => word.startsWith(searchText.toLowerCase()));
  
      // Check if cuisines include the search text
      const includesSearchTextInCuisines = cuisines.some(cuisine => cuisine.toLowerCase().includes(searchText.toLowerCase()));
      // Check if any word in cuisines starts with the search text
      const containsWordsStartingWithSearchTextInCuisines = cuisines.some(cuisine => cuisine.toLowerCase().startsWith(searchText.toLowerCase()));
  
      return includesSearchTextInName || startsWithSearchTextInName || containsWordsStartingWithSearchTextInName ||
             includesSearchTextInCuisines || containsWordsStartingWithSearchTextInCuisines;
    });
  }
  