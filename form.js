function validate(val) {
    v1 = document.getElementById("fname");
    v2 = document.getElementById("lname");
    v3 = document.getElementById("email");
    v4 = document.getElementById("mob");
    v5 = document.getElementById("address");
    v6 = document.getElementById("suite");
    v7 = document.getElementById("city");
    v8 = document.getElementById("state");


    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;
    flag6 = true;
    flag7 = true;
    flag8 = true;


    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "green";
            flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "green";
            flag2 = true;
        }
    }
    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "green";
            flag3 = true;
        }
    }
    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "green";
            flag4 = true;
        }
    }
    if(val>=5 || val==0) {
        if(v5.value == "") {
            v5.style.borderColor = "red";
            flag5 = false;
        }
        else {
            v5.style.borderColor = "green";
            flag5 = true;
        }
    }
    if(val>=6 || val==0) {
        if(v6.value == "") {
            v6.style.borderColor = "red";
            flag6 = false;
        }
        else {
            v6.style.borderColor = "green";
            flag6 = true;
        }
    }
    if(val>=7 || val==0) {
        if(v7.value == "") {
            v7.style.borderColor = "red";
            flag7 = false;
        }
        else {
            v7.style.borderColor = "green";
            flag7 = true;
        }
    }
    if(val>=8 || val==0) {
        if(v8.value == "") {
            v8.style.borderColor = "red";
            flag8 = false;
        }
        else {
            v8.style.borderColor = "green";
            flag8 = true;
        }
    }

    

    flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8;

    return flag;
}

// mobiscroll.setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
//   });
const cleaningServiceData = {
    serviceTypes: [
        { type: "Studio", price: 90 },
        { type: "One Bedroom House", price: 110 },
        { type: "Two Bedroom House", price: 130 },
        { type: "Three Bedroom House", price: 150 },
        { type: "Four Bedroom House", price: 170 },
    ],
    bathrooms: [
        { count: "1 Full Bathroom", price: 30 },
        { count: "2 Full Bathrooms", price: 50 },
        { count: "3 Full Bathrooms", price: 70 },
        { count: "4 Full Bathrooms", price: 90 },
        { count: "5 Full Bathrooms", price: 110 },
    ],
    halfBathrooms: [
        { count: "0 Half Bathrooms", price: 8 },
        { count: "1 Half Bathroom", price: 12 },
        { count: "2 Half Bathrooms", price: 24 },
        { count: "3 Half Bathrooms", price: 36 },
        { count: "4 Half Bathrooms", price: 48 },
        { count: "5 Half Bathrooms", price: 60 },
    ],
    extras: [
        { name: "I Need This Cleaning Today!", price: 45 },
        { name: "Deep Cleaning", price: 55 },
        { name: "Move In / Move Out", price: 75 },
        { name: "Post Construction", price: 95 },
        { name: "Inside the Fridge", price: 12 },
        { name: "Inside the Oven", price: 18 },
        { name: "Pets", price: 30 },
        { name: "Inside Cabinets / Cupboards", price: 25 },
        { name: "Inside Windows", price: 25 },
        { name: "Clean Blinds (Per Set)", price: 6 },
        { name: "Laundry (Per Load)", price: 18 },
        { name: "Clean Dishes (1 Sinkful)", price: 12 },
        { name: "Balcony / Patio", price: 18 },
        { name: "30 Minutes of Organizing", price: 22 },
        { name: "Sweep Garage", price: 28 },
        { name: "Ceiling Fan", price: 6 },
        { name: "Eco-Friendly Cleaning", price: 25 },
    ],
    squareFootage: [
        { range: "0 - 999 Sq Ft", price: 0 },
        { range: "1000 - 1499 Sq Ft", price: 25 },
        { range: "1500 - 1999 Sq Ft", price: 35 },
        { range: "2000+ Sq Ft", price: 55 },
    ],
    frequencyDiscounts: {
        "Every 4 Weeks": 0.05,
        "Every 3 Weeks": 0.07,
        "Every 2 Weeks": 0.12,
        "Every Week": 0.18,
        "One Time": 0,
    },
};

const bedroomSelect = document.getElementById('select1');
const bathroomSelect = document.getElementById('select2');
const halfBathroomSelect = document.getElementById('select3');
const squareFootageSelect = document.getElementById('select4');
const addOnCards = document.querySelectorAll('.selectable-card');
const frequencyButtons = document.querySelectorAll('.btn-primary');
const totalDisplay = document.getElementById('finalPrice'); // Display the final price

let selectedAddOns = [];
let frequencyDiscount = 0;

// Toggle Add-On Selection
addOnCards.forEach(card => {
    card.addEventListener('click', () => {
        const addOnText = card.querySelector('.card-text').textContent;
        if (selectedAddOns.includes(addOnText)) {
            selectedAddOns = selectedAddOns.filter(item => item !== addOnText);
            card.classList.remove('selected');
        } else {
            selectedAddOns.push(addOnText);
            card.classList.add('selected');
            card.querySelector("#counter").innerText = 1;
        }
        updateBookingSummary();
    });
});

// Frequency Selection
frequencyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all frequency buttons
        frequencyButtons.forEach(btn => btn.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        button.classList.add('selected');

        // Set frequency discount based on the button text
        frequencyDiscount = cleaningServiceData.frequencyDiscounts[button.textContent.trim()] || 0;

        // Update the booking summary to reflect the new frequency discount
        updateBookingSummary();
    });
});

// Handle bedroom selection
bedroomSelect.addEventListener('change', updateBookingSummary);

// Handle bathroom selection
bathroomSelect.addEventListener('change', updateBookingSummary);

// Handle Half Bathroom Selection
halfBathroomSelect.addEventListener('change', updateBookingSummary);

// Handle Square Footage Selection
squareFootageSelect.addEventListener('change', updateBookingSummary);

// Update Booking Summary Display
function updateBookingSummary() {
    const bedroom = bedroomSelect.options[bedroomSelect.selectedIndex]?.text.trim();
    const bathroom = bathroomSelect.options[bathroomSelect.selectedIndex]?.text.trim();
    const halfBathroom = halfBathroomSelect.options[halfBathroomSelect.selectedIndex]?.text.trim();
    const squareFootage = squareFootageSelect.options[squareFootageSelect.selectedIndex]?.text.trim();

    if (!bedroom || !bathroom) {
        document.getElementById("finalPrice").innerText = 'Please select a bedroom and bathroom type.';
        return;
    }

    // Debugging: Log selected values
    console.log("Selected Bedroom:", bedroom);
    console.log("Selected Bathroom:", bathroom);
    console.log("Selected Half Bathroom:", halfBathroom);
    console.log("Selected Square Footage:", squareFootage);

    // Calculate prices
    const basePrice = cleaningServiceData.serviceTypes.find(service => service.type === bedroom)?.price || 0;
    const bathroomPrice = cleaningServiceData.bathrooms.find(bath => bath.count === bathroom)?.price || 0;
    const halfBathroomPrice = cleaningServiceData.halfBathrooms.find(halfBath => halfBath.count === halfBathroom)?.price || 0;
    const squareFootagePrice = cleaningServiceData.squareFootage.find(size => size.range === squareFootage)?.price || 0;

    // Debugging: Log prices
    console.log("Base Price:", basePrice);
    console.log("Bathroom Price:", bathroomPrice);
    console.log("Half Bathroom Price:", halfBathroomPrice);
    console.log("Square Footage Price:", squareFootagePrice);

    // Calculate total price for selected add-ons with quantities and display name + quantity
    const addOnTotal = Array.from(addOnCards).reduce((total, card) => {
        if (card.classList.contains("selected")) {
            const addOnText = card.querySelector('.card-text').textContent;
            const quantity = parseInt(card.querySelector("#counter").innerText);
            const addOnData = cleaningServiceData.extras.find(extra => extra.name === addOnText);
            return addOnData ? total + (addOnData.price * quantity) : total;
        }
        return total;
    }, 0);

    // Display add-on names and quantities in the booking summary
    const extrasList = Array.from(addOnCards)
        .filter(card => card.classList.contains("selected"))
        .map(card => {
            const addOnText = card.querySelector('.card-text').textContent;
            const quantity = parseInt(card.querySelector("#counter").innerText);
            return `${addOnText} (x${quantity})`;  // Displaying quantity for each selected add-on
        }).join(", ");

    const totalBeforeDiscount = basePrice + bathroomPrice + halfBathroomPrice + squareFootagePrice + addOnTotal;
    const finalPrice = totalBeforeDiscount * (1 - frequencyDiscount);

    // Update Booking Summary Card
    document.getElementById("serviceType").innerText = bedroom;
    document.getElementById("bathroomType").innerText = bathroom;
    document.getElementById("halfBathroomType").innerText = halfBathroom;
    document.getElementById("squareFootageType").innerText = squareFootage;
    document.getElementById("extrasList").innerText = extrasList || "None";
    document.getElementById("frequencyDiscountText").innerText = `${(frequencyDiscount * 100).toFixed(0)}%`;
    document.getElementById("totalBeforeDiscount").innerText = `$${totalBeforeDiscount.toFixed(2)}`;
    document.getElementById("finalPrice").innerText = `$${finalPrice.toFixed(2)}`;
}

// Functions to handle increment and decrement of add-on quantities
function increment(event) {
    event.stopPropagation();  // Prevents toggleSelect from being triggered
    const counter = event.target.parentNode.querySelector("#counter");
    let count = parseInt(counter.innerText);
    counter.innerText = ++count;

    // Update the booking summary after incrementing
    updateBookingSummary();
}


function decrement(event) {
    event.stopPropagation();  // Prevents toggleSelect from being triggered
    const counter = event.target.parentNode.querySelector("#counter");
    let count = parseInt(counter.innerText);
    if (count > 1) {
        counter.innerText = --count;

        // Update the booking summary after decrementing
        updateBookingSummary();
    }
}

 // Function to toggle 'selected' class on click
 function toggleSelect(card) {
    card.classList.toggle('selected');
  }

const datePicker = document.getElementById('datePicker');
    const timePicker = document.getElementById('timePicker');
    const selectedDateTimeElement = document.getElementById('selectedDateTime');
    const selectedDateText = document.getElementById('selectedDateText'); // For booking summary

    // Set minimum date to today
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Clear time part for accurate comparison
    datePicker.min = today.toISOString().split("T")[0];

    // Function to display the selected date and time
    function updateSelectedDateTime() {
        const selectedDate = new Date(datePicker.value);
        const selectedTime = timePicker.value;

        selectedDate.setHours(0, 0, 0, 0); // Clear time for accurate comparison

        if (selectedDate < today) {
            selectedDateTimeElement.textContent = "Please select a future date.";
            selectedDateTimeElement.style.color = "red";
            selectedDateText.textContent = "-"; // Reset in booking summary
        } else if (!selectedTime) {
            selectedDateTimeElement.textContent = "Please select a time.";
            selectedDateTimeElement.style.color = "red";
            selectedDateText.textContent = "-"; // Reset in booking summary
        } else {
            const dateStr = selectedDate.toDateString();
            const dateTimeStr = `${dateStr} at ${selectedTime}`;
            selectedDateTimeElement.textContent = `You selected: ${dateTimeStr}`;
            selectedDateTimeElement.style.color = "black";
            selectedDateText.textContent = dateTimeStr; // Update in booking summary
        }
    }

    // Listen for changes in the date and time inputs
    datePicker.addEventListener('change', updateSelectedDateTime);
    timePicker.addEventListener('change', updateSelectedDateTime);
  



  