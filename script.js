const cards = document.querySelectorAll(".card");
const list = document.querySelector(".list-container");
const totalBtn = document.getElementById("Total-amount");
const totalBill = document.getElementById("Total-bill");

let total = 0;

cards.forEach(card => {
    card.addEventListener("click", () => {

        const name = card.querySelector(".item-name").innerText;
        const price = Number(card.querySelector(".item-price").dataset.price);

        total += price;

        const li = document.createElement("li");

        const text = document.createElement("span");
        text.innerText = `${name} - ₹${price}`;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "❌";

        removeBtn.addEventListener("click", () => {
            total -= price;
            li.remove();
            totalBill.innerText = `₹${total}`;
        });

        li.appendChild(text);
        li.appendChild(removeBtn);

        list.appendChild(li);
    });
});

totalBtn.addEventListener("click", () => {
    totalBill.innerText = `₹${total}`;
});