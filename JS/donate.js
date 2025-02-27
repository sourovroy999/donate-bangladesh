console.log('donate file added');



// donate one

document.getElementById('donate-click-noakhali').addEventListener('click', function () {

    console.log('donate button clicked');

    const prevAmount = getInnerTextValueById('previous-ammount');
    console.log(prevAmount);


    const donateAmount = getInputFieldValueById('donate-noakhali-input');
    console.log(donateAmount);

    const mainBalance = getInnerTextValueById('main-balance');
    if (isNaN(donateAmount)) {
        alert('Please Enter Donation Ammount');
        return;
    }


    if (donateAmount <= mainBalance) {

        const newAmmount = prevAmount + donateAmount;

        const newMainBalance = mainBalance - donateAmount;

        document.getElementById('previous-ammount').innerText = newAmmount + ' BDT';

        document.getElementById('main-balance').innerText = newMainBalance + ' BDT';



        console.log(newAmmount);
    }
    else {
        alert('insufficient balance');
        return;
       
    }

});






// donate two

document.getElementById('donate-click-feni').addEventListener('click', function () {

    console.log('donate button clicked');

    const prevAmount = getInnerTextValueById('previous-ammount-feni');
    console.log(prevAmount);


    const donateAmountTwo = getInputFieldValueById('donate-feni-input');

    const mainBalance = getInnerTextValueById('main-balance');
    if (isNaN(donateAmountTwo)) {
        alert('Please Enter Donation Ammount');
        return;
    }


    if (donateAmountTwo <= mainBalance) {

        const newAmmount = prevAmount + donateAmountTwo;

        const newMainBalance = mainBalance - donateAmountTwo;

        document.getElementById('previous-ammount-feni').innerText = newAmmount + ' BDT';

        document.getElementById('main-balance').innerText = newMainBalance + ' BDT';



        console.log(newAmmount);
    }
    else {
        alert('insufficient balance');
        return;
       
    }

})


// donate three

document.getElementById('donate-click-quota').addEventListener('click', function () {

    console.log('donate button clicked');

    const prevAmount = getInnerTextValueById('previous-ammount-quota');
    console.log(prevAmount);


    const donateAmountTwo = getInputFieldValueById('donate-quota-input');

    const mainBalance = getInnerTextValueById('main-balance');
    if (isNaN(donateAmountTwo)) {
        alert('Please Enter Donation Ammount');
        return;
    }


    if (donateAmountTwo <= mainBalance) {

        const newAmmount = prevAmount + donateAmountTwo;

        const newMainBalance = mainBalance - donateAmountTwo;

        document.getElementById('previous-ammount-quota').innerText = newAmmount + ' BDT';

        document.getElementById('main-balance').innerText = newMainBalance + ' BDT';



        console.log(newAmmount);
    }
    else {
        alert('insufficient balance');
        return;
       
    }

})