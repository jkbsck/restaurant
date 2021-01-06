const contact = (() => {
  const _pageContent = document.querySelector(".page-content");
  
  const _buildContact = () => {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-container");

    const address = document.createElement("h2");
    address.classList.add("address");
    address.textContent = "ADDRESS: 5th Avenue, New York 1234/4321";
    contactDiv.appendChild(address);

    const phone = document.createElement("h2");
    phone.classList.add("phone");
    phone.textContent = "PHONE: 9824589623";
    contactDiv.appendChild(phone);

    const email = document.createElement("h2");
    email.classList.add("email");
    email.textContent = "EMAIL: info@therestaurant.com";
    contactDiv.appendChild(email);

    _pageContent.appendChild(contactDiv);
  };
  
  const build = () => {
    _buildContact();
  };

  return { build };
})();

export { contact };
