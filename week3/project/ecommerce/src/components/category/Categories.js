import { useState } from "react";
import "./categories.css";

const Categories = ({ categoriesData, onCategoryChanged }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function changeCategory(cat) {
    setSelectedCategory(cat);
    onCategoryChanged(cat);
  }

  return (
    <div id="category-container">
      {categoriesData.map((category) => (
        <div key={category} className={category === selectedCategory ? "selected category" : "category"} onClick={() => changeCategory(category)}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
