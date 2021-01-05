const delivery = (() => {
  const _pageContent = document.querySelector(".page-content");
  
  const _buildList = () => {
    const list = document.createElement("div");
    list.classList.add("list");

    const meals = ["Potato Gnocchi with Sheep Cheese", "Chicken Shit Bitch", "Grilled Rats", "Beef Steak", "Raw Turkey on Peas", "Cooked Wuhan's Bat", "Fried Lamb Thigh with Dried Wasps", "French Fries", "Meshed Potatos", "Rice", "Roasted Potatos", "Creamy Garlic Soup", "Soup with Secret Ingredients", "Vegan Soup with Gun Powder"];

    meals.forEach(meal => {
      const mealNameDiv = document.createElement("div");
      mealNameDiv.classList.add("meal-name");

      const mealName = document.createElement("h3");
      mealName.textContent = meal;
      mealNameDiv.appendChild(mealName);
    });
  };
  
  const build = () => {
    _buildList();
  };

  return { build };
})();

export { delivery };
