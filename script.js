let billInput = document.querySelector('.form__input_bill');
let qualitySelect = document.querySelector('.form__input_quality');
let peopleInput = document.querySelector('.form__input_people');

let calcButton = document.querySelector('.form__button_calc');
let resetButton = document.querySelector('.form__button_reset');

calcButton.addEventListener('click', calcClickHandler);
resetButton.addEventListener('click', resetClickHandler);

function calcClickHandler() {
let bill = parseInt(billInput.value);
let quality = parseInt(qualitySelect.value);
let people = parseInt(peopleInput.value);


let tips = calculateTips(bill, quality);
let tipsForEach = tips / people;
let totalForEach = calculateTotal(bill, tips) / people;
renderResults(tipsForEach, totalForEach);
}

function resetClickHandler(){
    billInput.value = '';
    qualitySelect.value = '';
    peopleInput.value = '';
    renderResults('___', '___');
}

function calculateTips(summ, persent){
    return summ * persent / 100;
}
function calculateTotal(summ, tips){
    return summ + tips;
}
function renderResults (tips, total){
document.querySelector('.results__value_tips').innerText = tips + '₽';
    document.querySelector('.results__value_total').innerText = total + '₽';
}
 
