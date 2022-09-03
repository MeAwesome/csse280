var value;

updateCounter(null);

function updateCounter(amount){
    if(amount == null){
        value = 0;
        amount = 0;
    }
    value += amount;
    document.querySelector("#counter").innerHTML = value;
}