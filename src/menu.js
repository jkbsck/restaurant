const menu = (() => {

  const _pageContent = document.querySelector(".page-content");

  const _buildDays = () => {
    for (let i = 0; i < 7; i++) {
      // day container
      const day = document.createElement("div");
      day.classList.add("day");

      // left container with day and opening hours
      const leftDiv = document.createElement("div");
      leftDiv.classList.add("left-div");
      day.appendChild(leftDiv);

      const dayName = document.createElement("div");
      dayName.classList.add("day-name");
      leftDiv.appendChild(dayName);

      const dayNameH1 = document.createElement("h2");
      dayName.appendChild(dayNameH1);

      const openingHours = document.createElement("div");
      openingHours.classList.add("opening-hours");
      leftDiv.appendChild(openingHours);

      const openingHoursH1 = document.createElement("h2");
      openingHours.appendChild(openingHoursH1);

      // right container with menu content
      const rightDiv = document.createElement("div");
      rightDiv.classList.add("right-div");
      day.appendChild(rightDiv);

      const mainMealName = document.createElement("h5");
      mainMealName.textContent = "Main meal:";
      rightDiv.appendChild(mainMealName);

      const mainMeal = document.createElement("h3");
      rightDiv.appendChild(mainMeal);

      const soupName = document.createElement("h5");
      soupName.textContent = "Soup:";
      rightDiv.appendChild(soupName);

      const soup = document.createElement("h3");
      rightDiv.appendChild(soup);

      switch (i) {
        case 0: 
          day.classList.add("monday");
          dayNameH1.textContent = "MONDAY";
          openingHoursH1.textContent = "8AM - 5PM";

          mainMeal.textContent = "Potato Gnocchi with Sheep Cheese";
          
          soup.textContent = "Creamy Garlic";
          break;
        case 1: 
          day.classList.add("tuesday");
          dayNameH1.textContent = "TUESDAY";
          openingHoursH1.textContent = "8AM - 5PM";
          
          mainMeal.textContent = "Potato Gnocchi with Sheep Cheese";
          
          soup.textContent = "Creamy Garlic";
          break;
        case 2: 
          day.classList.add("wednesday");
          dayNameH1.textContent = "WEDNESDAY";
          openingHoursH1.textContent = "8AM - 5PM";
          
          mainMeal.textContent = "Potato Gnocchi with Sheep Cheese";
          
          soup.textContent = "Creamy Garlic";
          break;
        case 3: 
          day.classList.add("thursday");
          dayNameH1.textContent = "THURSDAY";
          openingHoursH1.textContent = "8AM - 5PM";
          
          mainMeal.textContent = "Potato Gnocchi with Sheep Cheese";
          
          soup.textContent = "Creamy Garlic";
          break;
        case 4: 
          day.classList.add("friday");
          dayNameH1.textContent = "FRIDAY";
          openingHoursH1.textContent = "8AM - 5PM";
          
          mainMeal.textContent = "Potato Gnocchi with Sheep Cheese";
          
          soup.textContent = "Creamy Garlic";
          break;
        case 5: 
          day.classList.add("saturday");
          rightDiv.innerHTML = "";
          dayNameH1.textContent = "SATURDAY";
          openingHoursH1.textContent = "CLOSED";
          break;
        case 6: 
          day.classList.add("sunday");
          rightDiv.innerHTML = "";
          dayNameH1.textContent = "SUNDAY";
          openingHoursH1.textContent = "CLOSED";
          break;
      }
      
      _pageContent.appendChild(day);
    }
  };

  const build = () => {
    _buildDays();
  };

  return { build }
})();

export { menu }
