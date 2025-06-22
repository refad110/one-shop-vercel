
const products = [
  { name: "Blue T-Shirt", price: "₹299" },
  { name: "Wireless Earbuds", price: "₹999" },
  { name: "Organic Rice 5kg", price: "₹450" },
  { name: "Wall Painting", price: "₹799" },
  { name: "Travel Backpack", price: "₹649" }
];

const productGrid = document.getElementById("product-grid");

products.forEach(prod => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `<h3>${prod.name}</h3><p>${prod.price}</p>`;
  productGrid.appendChild(card);
});
