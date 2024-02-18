let totalPrice = 0;
const seatA = document.querySelectorAll("#a");
for (let i = 0; i < seatA.length; i++) {
    const seat = seatA[i];

    seat.addEventListener("click", function () {
        seat.classList.add('bg-lime-600');

        const getText = seat.innerText;

        const tableContainer = document.getElementById("table-container");

        const p = document.createElement("p");
        p.innerText = getText;
        tableContainer.appendChild(p);

        // Seat Count
        const totalSeatElement = document.getElementById("total-seat");
        const totalSeatText = totalSeatElement.innerText;
        const currentSeat = parseInt(totalSeatText);

        const totalSeat = currentSeat + 1;
        totalSeatElement.innerText = totalSeat;

        // Seat Reduce
        const reduceSeatElement = document.getElementById("seat-reduce");
        const reduceSeatText = reduceSeatElement.innerText;
        const reduceSeat = parseInt(reduceSeatText);

        const availableSeat = reduceSeat - 1;
        reduceSeatElement.innerText = availableSeat;


        // Price Calculate
        const price = document.getElementById("seat-price");
        const priceText = price.innerText;

        const perSeatPrice = parseFloat(priceText);

        totalPrice += perSeatPrice;
        document.getElementById('total-price').innerText = totalPrice;

    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function () {
    // console.log("connected")

    const couponElement = document.getElementById('input-field').value;
    if (couponElement === "NEW15" || couponElement === "Couple 20") {

        if (couponElement === "Couple 20") {
            const discountAmount = totalPrice * 0.2;

            const grandTotalPrice = document.getElementById("grand-total");
            grandTotalPrice.innerText = totalPrice - discountAmount;


        }

    } else {
        alert("Invalid Coupon Code")
    }


})