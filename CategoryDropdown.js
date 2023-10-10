import React, { useState } from "react";

const CategoryDropdown = ({
  showCategoriesDropdown,
  onCategorySelect,
  selectedCategory,
  onCreateCategory,
  categories,
}) => {
  const [newCategory, setNewCategory] = useState("");

  const handleNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

 const handleCreateCategory = () => {
   if (newCategory.trim() !== "") {
     const updatedCategories = [...categories, newCategory];
     onCreateCategory(newCategory);
     localStorage.setItem("categories", JSON.stringify(updatedCategories));
     setNewCategory("");
   }
 };

 
  const defaultCategories = ["All"];

  return (
    showCategoriesDropdown && (
      <div className='dropdown-content'>
        {defaultCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category)}
            className={`dropdown-link ${
              category === selectedCategory ? "selected" : ""
            }`}
          >
            {category}
          </button>
        ))}
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category)}
            className={`dropdown-link ${
              category === selectedCategory ? "selected" : ""
            }`}
          >
            {category}
          </button>
        ))}
        <div className='dropdown-link '>
          <input
            type='text'
            placeholder='Create Category'
            value={newCategory}
            onChange={handleNewCategoryChange}
            className='category-input'
          />
          {newCategory.trim() !== "" && (
            <button onClick={handleCreateCategory} className='category-button'>
              Create
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default CategoryDropdown;
