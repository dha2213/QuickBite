import { useParams } from "react-router-dom";
import { IMG_CLOUD_URL } from "../Constants";
import useRestraunt from "../Utils/useRestraunt";
import { AiTwotoneStar } from "react-icons/ai";
import MenuItemCard from "./MenuItemCard";
import CartShimmer from "./CartShimmer";
import { useEffect, useState } from "react";

const RestrauntMenu = () => {
  const { id, categoryName } = useParams();
  const { restraunt, restrauntMenu } = useRestraunt(id);
  const [filteredMenu, setFilteredMenu] = useState(restrauntMenu);

  const ratingColor = restraunt?.avgRating >= 4 ? "#00ad1d" : "#ec3838";

  useEffect(() => {
    if (restrauntMenu) {
      if (categoryName) {
        console.log("restrauntMenu", restrauntMenu);
        const filteredItems = restrauntMenu.filter((menuItem) => {
          const name = menuItem?.name?.toLowerCase();
          const category = menuItem?.category?.toLowerCase(); // Assuming category is a string
          
          // Check if the restaurant name includes the search text or vice versa
          const includesCategoryNameInName = name && (name.includes(categoryName.toLowerCase()) || categoryName.toLowerCase().includes(name));
          // Check if the restaurant name starts with the search text
          const startsWithCategoryNameInName = name && name.startsWith(categoryName.toLowerCase());
          // Check if the restaurant name contains words that start with the search text
          const containsWordsStartingWithCategoryNameInName = name && name.split(' ').some(word => word.startsWith(categoryName.toLowerCase()));
      
          // Check if category includes the search text
          const includesCategoryNameInCategories = category && category.includes(categoryName.toLowerCase());
          // Check if any word in category starts with the search text
          const containsWordsStartingWithCategoryNameInCategories = category && category.startsWith(categoryName.toLowerCase());
      
          return includesCategoryNameInName || startsWithCategoryNameInName || containsWordsStartingWithCategoryNameInName ||
                 includesCategoryNameInCategories || containsWordsStartingWithCategoryNameInCategories;
      });
      

        setFilteredMenu(filteredItems);
      } else {
        setFilteredMenu(restrauntMenu);
      }
    }
  }, [categoryName, restrauntMenu]);

  return !restraunt ? (
    <CartShimmer />
  ) : (
    <div className="restraunt-menu">
      <div className="restraunt-menu-header">
        <img
          src={IMG_CLOUD_URL + restraunt?.cloudinaryImageId}
          alt="restraunt"
        />
        <div className="restraunt-menu-content">
          <h1>{restraunt?.name}</h1>
          <p>{restraunt?.categorys?.join(", ")}</p>
          <div className="card-content">
            <h4 className="rating" style={{ backgroundColor: ratingColor }}>
              <AiTwotoneStar /> {restraunt?.avgRating}
            </h4>{" "}
            |<h4>{restraunt?.sla.slaString}</h4> |
            <h4>{restraunt?.costForTwoMessage}</h4>
          </div>
        </div>
      </div>
      <div className="menu">
        <ul>
          <p
            style={{ fontSize: "1.5rem", lineHeight: "0.3", marginTop: "30px" }}
          >
            <h2>Recommended {categoryName} for you...</h2>
          </p>
          <p style={{ color: "grey", lineHeight: "0.5" }}>
            {filteredMenu?.length} ITEMS
          </p>
          {filteredMenu?.map((item, index) => (
            <li key={item?.id}>
             
              <MenuItemCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
