const chocolates = document.querySelectorAll('.chocolate');
const selectedList = document.getElementById('selected-list');
const totalPrice = document.getElementById('total-price');

let selectedChocolates = [];

chocolates.forEach(chocolate => {
  chocolate.addEventListener('click', () => {
    const name = chocolate.dataset.name;
    const price = parseFloat(chocolate.dataset.price);
    
    if (selectedChocolates.length < 8) {
      selectedChocolates.push({ name, price });
      updateSelectedList();
      updateTotalPrice();
    } else {
      alert('Maximum 8 chocolates allowed in the pack.');
    }
  });
});

function updateSelectedList() {
  selectedList.innerHTML = '';
  selectedChocolates.forEach(chocolate => {
    const listItem = document.createElement('li');
    listItem.textContent = `${chocolate.name} - $${chocolate.price}`;
    selectedList.appendChild(listItem);
  });
}

function updateTotalPrice() {
  let total = 0;
  selectedChocolates.forEach(chocolate => {
    total += chocolate.price;
  });
  totalPrice.textContent = total.toFixed(2);
}