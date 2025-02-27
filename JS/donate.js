console.log('donate file added');



// donate one

document.getElementById('donate-click-noakhali').addEventListener('click', function () {

    // console.log('donate button clicked');

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

        // date time location
        const doo = new Date();
       let loc = d.toUTCString();
       console.log(loc);

       var myDate = new Date(loc);
 
    console.log(myDate.toLocaleString());



        // sending to history section ***************
        const div = document.createElement('div');

        //   inner html start
        div.innerHTML = `
        <div class=" border-2 w-10/12 p-4 mx-auto  my-4 h-16">
        <p>${donateAmount} TAKA is Donated for Flood at Noakhali, Bangladesh</p>
        </div>
        
        `
        // inner html end

        document.getElementById('history-section').appendChild(div);

        // sending to history section end ***********




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

        
        // sending to history section ***************
        const div = document.createElement('div');

        //   inner html start
        div.innerHTML = `
        <div class=" border-2 w-10/12 p-4 mx-auto  my-4 h-16">
        <p>${donateAmountTwo} TAKA is Donated for Flood Relief in Feni,Bangladesh</p>
        </div>
        
        `
        // inner html end

        document.getElementById('history-section').appendChild(div);

        // sending to history section end ***********




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

        
         // sending to history section ***************
         const div = document.createElement('div');

         //   inner html start
         div.innerHTML = `
         <div class=" border-2 w-10/12 p-4 mx-auto  my-4 h-16">
         <p>${donateAmountTwo} TAKA is Donated for Injured in the Quota Movement</p>
         </div>
         
         `
         // inner html end
 
         document.getElementById('history-section').appendChild(div);
 
         // sending to history section end ***********


        console.log(newAmmount);
    }
    else {
        alert('insufficient balance');
        return;

    }

})