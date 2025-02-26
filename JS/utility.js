console.log('utility file added');

function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputValueNumber= parseFloat(inputValue);
    return inputValueNumber;
}