const delivery_ = (() => {
  const _pageContent = document.querySelector(".page-content");
  
  const _buildList = () => {
    const list = document.createElement("div");
    list.classList.add("list");

    const listTitleDiv = document.createElement("div");
    listTitleDiv.classList.add("list-title");

    const listTitle = document.createElement("h1");
    listTitle.textContent = "Pick, Pay & Eat just by few clicks.";
    listTitleDiv.appendChild(listTitle);
    list.appendChild(listTitleDiv);

    const meals = ["Potato Gnocchi with Sheep Cheese", "Chicken Heads", "Grilled Rats", "Beef Steak", "Raw Turkey on Peas", "Cooked Wuhan Bat", "Fried Lamb Thigh with Dried Wasps", "French Fries", "Meshed Potatos", "Rice", "Roasted Potatos", "Creamy Garlic Soup", "Soup with Secret Ingredients", "Vegan Soup with Gun Powder Seasoning"];

    meals.forEach(meal => {
      const mealNameDiv = document.createElement("div");
      mealNameDiv.classList.add("meal-name");

      const mealName = document.createElement("h3");
      mealName.textContent = meal;
      mealNameDiv.appendChild(mealName);

      const priceDiv = document.createElement("div");
      priceDiv.classList.add("price-pick");
      
      const price = document.createElement("h3");
      price.textContent = "4.99$";
      priceDiv.appendChild(price);

      const pickLabel = document.createElement("h5");
      pickLabel.textContent = "quantity:";
      priceDiv.appendChild(pickLabel);

      const pick = document.createElement("input");
      pick.type = "number";
      priceDiv.appendChild(pick);
      
      mealNameDiv.appendChild(priceDiv);

      list.appendChild(mealNameDiv);
    });

    const proceedDiv = document.createElement("div");
    proceedDiv.classList.add("proceed");

    const proceed = document.createElement("div");

    const proceedH1 = document.createElement("h1");
    proceedH1.textContent = "PROCEED";
    proceed.appendChild(proceedH1);

    proceedDiv.appendChild(proceed);

    list.appendChild(proceedDiv);

    _pageContent.appendChild(list);
  };
  
  const build = () => {
    _buildList();
  };

  return { build };
})();

export { delivery_ }; // delivery won't work - allegedly is already defined
