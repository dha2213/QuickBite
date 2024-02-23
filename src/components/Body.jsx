import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./BodyShimmer";
import { Link } from "react-router-dom";
import { filterData,filterDataCategories } from "../Utils/helper";
import { DESKTOP_WEB_LISTING } from "../Constants";
import useOnline from "../Utils/useOnline";
import useResData from "../Utils/useResData";
import Categories from "./Categories";
 
const Body = () => {
  const [allRestaurants, FilterRes] = useResData(DESKTOP_WEB_LISTING);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isOnline = useOnline();

  
 


  if (!isOnline) {
    return (
      <h1>
        🔴 Oops! seems that your are offline please check your network
        connection
      </h1>
    );
  }
  if (!allRestaurants) return null;
  const searchData = (categoryName, restaurants) => {
    setSearchText(categoryName); // Update searchText with the selected category name
    if (categoryName !== "") {
        const filteredData = filterData(categoryName, restaurants);
        setFilteredRestaurants(filteredData);
        setErrorMessage("");
        if (filteredData?.length === 0) {
            setErrorMessage(
                `Sorry, we couldn't find any results for "${categoryName}"`
            );
        }
    } else {
        setErrorMessage("");
        setFilteredRestaurants(restaurants);
    }
};


const openBotWindow = () => {
  window.open(
    'https://mediafiles.botpress.cloud/a93e2d40-54e3-4547-b30c-6d8a6f6c175a/webchat/bot.html',
    'BotWindow',
    'width=600,height=600'
  );
};

useEffect(() => {
  // Sort restaurants by distance in ascending order
  if (filteredRestaurants) {
    const sortedRestaurants = [...filteredRestaurants].sort(
      (a, b) =>
        parseFloat(a.sla?.lastMileTravelString) -
        parseFloat(b.sla?.lastMileTravelString)
    );
    setFilteredRestaurants(sortedRestaurants);
  }
}, [filteredRestaurants]);
console.log(filteredRestaurants);


  return (
    <>
      <div>
      <h3>All categories....</h3>
      <Categories searchData={searchData } restaurants={allRestaurants}/>
      </div>
       
        <br/>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restraunt you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // filter the restraunt list as per the search
            // and set the restraunts
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restraunt-list">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restraunt) => (
              <Link
                to={searchText === "" ? `/restraunt/${restraunt?.info?.id}` : `/restraunt/${searchText}/${restraunt?.info?.id}`}
                key={restraunt?.info?.id}
                className="card-link"
              >
                <RestrauntCard {...restraunt?.info} />
              </Link>
            )
          )}
        </div>
      )}
      <button
  className="bot-button"
  onClick={openBotWindow}
  style={{
     
    position: 'fixed',
    bottom: '20px', // Adjust as needed
    right: '20px', // Adjust as needed
    zIndex: 1000, // Ensure it's above other content
    border: 'none', // Remove default button styling
    background: 'none', // Remove default button styling
    cursor: 'pointer', // Ensure cursor changes to pointer on hover
     
  }}
>
  <img
    src="https://tableo.com/wp-content/uploads/Tableo-AI-Bot-Invention-1-e1700214784119.webp"
    alt="Bot"
    className="bot-image"
    style={{ maxWidth: '90px', maxHeight: '90px', }} // Adjust as needed
  />
</button>
   </>
  );
};
export default Body;
