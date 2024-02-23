import React from 'react';
import { Link } from 'react-router-dom';
import { filterData } from "../Utils/helper";
import './Categories.css'; // Import the CSS file for styling

const categories = [
    { name: "Rolls ", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m1vhuflquob9rorsvnbk" },
    { name: "Thali", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/2b2a7a2a2b97031ec941e12a29bada0d" }, 

    { name: "Chinese", image: "https://media.istockphoto.com/id/1366953086/photo/korean-dishes.jpg?s=2048x2048&w=is&k=20&c=Ly8WQMuUTUTcudBvue5q3MXqzrqTMqCqyDCu8kJLjHw=" },
    { name: "Andhra", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cx9rocivcrh76hvxqhdx" },
    { name: "Biryani", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/195876a3181ef63f76e45e3a7b49b585" },
    { name: "South Indian", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byilgyrcfz690ryoasww" },
    { name: "Burger", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/sqj2kcjjx6n0ng6te1hp" },
    { name: "American", image:  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nbcpg5xk6ekrrngmkd0b" },
    { name: "Snacks", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a1wfwlvsm4e2xs3bzdxb" },
    { name: "North Indian", image: "https://masalabuzz.com/wp-content/uploads/2021/06/North-Indian-cover-food.jpg" },
    { name: "Pizza", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pasta", image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=900&t=st=1707642801~exp=1707643401~hmac=d8c9f541bc6bd0fee706711500fe8e9ab620bb96fcc2cd7ced3c7bd3ea741d6c" },
    { name: "Sweet", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/crk3uqyjujeff9dkkyzv" },
    
    { name: "Desserts", image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
   ];

const Categories = ({searchData,restaurants}) => {
    const handleCategoryClick = (categoryName) => {
        // Call the searchData function with the category name
        searchData(categoryName,restaurants);
    };

    return (
        <div className="category-slider">
            {categories.map((category, index) => (
                <div key={index} className={`category-item ${category.name.toLowerCase()}`}>
                    {/* Pass an anonymous function to onClick to call handleCategoryClick with the category name */}
                    <button onClick={() => handleCategoryClick(category.name)} className="category-link">
                        <div className="category-image-container">
                            <img src={category.image} alt={category.name} className="category-image" />
                        </div>
                        <span className="category-name">{category.name}</span>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Categories;
