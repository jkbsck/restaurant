const mainPage = (() => {

  const _pageContent = document.querySelector(".page-content");

  const _buildWelcome = () => {
    const welcome = document.createElement("div");
    const welcomeH3 = document.createElement("h3");
    welcomeH3.textContent = "Welcome to The Restaurant";
    welcome.appendChild(welcomeH3);
    _pageContent.appendChild(welcome);
  };

  const _buildRestaurantImg = () => {
    const restaurantImg = document.createElement("div");
    restaurantImg.innerHTML = `<img src="https://www.jasna.sk/fileadmin/_processed_/d/0/csm_angusrestaurant_hotelposta_jasna_1_410b6c62d4.jpg" alt="photo of restaurant interior"></img>`
    _pageContent.appendChild(restaurantImg);
  };

  const _buildDescription = () => {
    const description = document.createElement("div");
    
    const p1 = document.createElement("p");
    p1.textContent = "Inspired by American gastronomy, new gastronomic experiences are brought to the centre of the town.";
    description.appendChild(p1);

    const h41 = document.createElement("h4");
    h41.textContent = "Angus on the plate";
    description.appendChild(h41);

    const p2 = document.createElement("p");
    p2.textContent = "Tender meat with a typical taste – this is meat of the Angus beef, which our restaurant is named after. Angus steaks are juicy, delicious and they literally melt in the mouth. And now you can taste them as well! Our a la carte menu includes not only steaks but also other meat as well as non-meat specialities with atypical side dishes.";
    description.appendChild(p2);

    const h42 = document.createElement("h4");
    h42.textContent = "International cuisine, local products";
    description.appendChild(h42);

    const p3 = document.createElement("p");
    p3.textContent = "We were inspired by the American culture but most of our ingredients come from local suppliers. This makes our specialities fresh and tasty. And this is why you can also enjoy traditional tastes of the region in our restaurant.";
    description.appendChild(p3);

    const h43 = document.createElement("h4");
    h43.textContent = "Great food and a great atmosphere";
    description.appendChild(h43);

    const p4 = document.createElement("p");
    p4.textContent = "An interesting and quite atypical interior offers an ideal background. The whole space is dominated by a fireplace, and fresh flowers on tables along with the surrounding Tatra nature guarantee positive feelings.";
    description.appendChild(p4);

    _pageContent.appendChild(description);
  };

const build = () => {
  _buildWelcome();
  _buildRestaurantImg();
  _buildDescription();
};

  return { build }
})();

export { mainPage }
