import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory, darkMode }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && (darkMode ? "#FC1503" : "red"),
          color: darkMode ? "white" : "red",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "#f5f3f2" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{fontSize:"18px", opacity: category.name === selectedCategory ? "1" : "0.8" ,color:darkMode?"#f5f3f2":"black" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
