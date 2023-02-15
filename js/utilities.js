// find input number function
function updateQuantityNumber(isIncrease, inputId){
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputNumber = parseInt(inputString);
    let newQuantity;
    if(isIncrease === true){
        newQuantity = inputNumber + 1;
    }
    else{
        if(inputNumber > 0){
            newQuantity = inputNumber - 1;
        }
        else{
            return;
        }
    }
    input.value = newQuantity;
    return newQuantity;
}

// value set function 
function setInnerText(setId, newValue){
    const innerText = document.getElementById(setId);
    if(isNaN(newValue)){
        innerText.innerText = 0;
    }
    else{
        innerText.innerText = newValue;
    }
}