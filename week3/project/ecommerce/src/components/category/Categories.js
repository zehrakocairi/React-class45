import { useState } from "react";
import "./categories.css";

const Categories = ({ categoriesData, onCategoryChanged }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function changeCategory(category) {
    setSelectedCategory(category);
    onCategoryChanged(category);
  }

  return (
    <div className="category-container">
      {categoriesData.map((category) => (
        <div key={category} className={category === selectedCategory ? "selected category" : "category"} onClick={() => changeCategory(category)}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
