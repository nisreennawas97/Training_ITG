const order_form = document.getElementById('order_form');
const food_modal = document.getElementById("food_modal");
const close_foodModel = document.getElementById('close_foodModel');

// to get user name
const urlSearchParams = new URLSearchParams(window.location.search);

order_form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const food_options = document.getElementsByName('food_options');
    let selected_food = "";

    for(let option of food_options)
    {
        if(option.checked)
        {
            selected_food = option;
            break;
        }
    }
    
    const special_notes = document.getElementById('special_notes');
   // alert(special_notes.value);
    //alert(selected_food.value);
    
    //modal data
     // Get the modal elements using getElementById
    const user_name = document.getElementById('user_name');
    const order_date = document.getElementById('order_date');
    const user_price = document.getElementById('user_price');
    const user_order = document.getElementById('user_order');
    const user_notes = document.getElementById('user_notes');
    let price;
    const currentdate = new Date();
    let datetime = currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear();


     // Set the innerHTML of the modal elements
    user_name.innerHTML = urlSearchParams.get("register_name");
    user_order.innerHTML = selected_food.value; 
    if(selected_food.value === "fried_chicken")
        price = 10;
    else if(selected_food.value === "pizza")
        price = 20;
    else
    price = 30;

    if(special_notes.value !== "")
    {
        price = price + 5;
        user_notes.innerHTML = "Your special notes: " + special_notes.value;
    }

    user_price.innerHTML = "$"+price;
    order_date.innerHTML = datetime;


    //display modal
    food_modal.style.display = "block";

});

close_foodModel.onclick = function() {
    food_modal.style.display = "none";
}