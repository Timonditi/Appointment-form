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
  // Pricing Data
  const cleaningServiceData = {
    serviceTypes: [
      { type: "Studio", price: 90 },
      { type: "One Bedroom House", price: 110 },
      { type: "Two Bedroom House", price: 130 },
      { type: "Three Bedroom House", price: 150 },
      { type: "Four Bedroom House", price: 170 },
    ],
    bathrooms: [
      { count: "1 Full Bathroom", price: 25 },
      { count: "2 Full Bathrooms", price: 50 },
      { count: "3 Full Bathrooms", price: 70 },
      { count: "4 Full Bathrooms", price: 90 },
      { count: "5 Full Bathrooms", price: 110 },
    ],
    halfBathrooms: [
      { count: "0 Half Bathrooms", price: 0 },
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
  
  // DOM Elements
  const bedroomSelect = document.getElementById('select1');
  const bathroomSelect = document.getElementById('select2');
  const addOnCards = document.querySelectorAll('.selectable-card');
  const frequencyButtons = document.querySelectorAll('.btn-primary');
  const totalDisplay = document.getElementById('selected-date'); // Assuming it's used to display the total for demo
  
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
      }
      console.log('Selected Add-Ons:', selectedAddOns); // Log selected add-ons
      calculateTotal();
    });
  });
  
  // Frequency Selection
  frequencyButtons.forEach(button => {
    button.addEventListener('click', () => {
      frequencyDiscount = cleaningServiceData.frequencyDiscounts[button.textContent.trim()] || 0;
      console.log('Selected Frequency Discount:', frequencyDiscount); // Log selected frequency discount
      calculateTotal();
    });
  });
  
  // Calculate Total Price
  function calculateTotal() {
    const bedroom = bedroomSelect.options[bedroomSelect.selectedIndex].text.trim();
    const bathroom = bathroomSelect.options[bathroomSelect.selectedIndex].text.trim();
    
    const basePrice = cleaningServiceData.serviceTypes.find(service => service.type === bedroom)?.price || 0;
    const bathroomPrice = cleaningServiceData.bathrooms.find(bath => bath.count === bathroom)?.price || 0;
  
    console.log('Base Price:', basePrice); // Log base price
    console.log('Bathroom Price:', bathroomPrice); // Log bathroom price
  
    const addOnTotal = selectedAddOns.reduce((total, addOn) => {
      const addOnData = cleaningServiceData.extras.find(extra => extra.name === addOn);
      return addOnData ? total + addOnData.price : total;
    }, 0);
  
    console.log('Add-On Total:', addOnTotal); // Log add-on total
  
    const finalPrice = (basePrice + bathroomPrice + addOnTotal) * (1 - frequencyDiscount);
    console.log('Final Price before discount:', basePrice + bathroomPrice + addOnTotal); // Log total before discount
    console.log('Final Price after discount:', finalPrice); // Log final price
  
    totalDisplay.textContent = `Estimated Total: $${finalPrice.toFixed(2)}`;
  }
  