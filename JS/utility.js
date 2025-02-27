console.log('utility file added');

function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputValueNumber= parseFloat(inputValue);
    return inputValueNumber;
}
function getInnerTextValueById(id){
    const innerValue=document.getElementById(id).innerText;
    const innerValueNumber= parseFloat(innerValue);
    return innerValueNumber;
}











// function addOnClickToAnid(id){
//     document.getElementById(id).onclick.add('my_modal_1.showModal()')
// }


// // check-btn-example
// document.getElementById('check-btn').addEventListener('click', function () {
//     const div= document.createElement('div');
    
//     div.innerHTML=`
//          <dialog id="my_modal_1" >
//               <div class="modal-box text-center my-4">
//                 <h3 class="text-4xl font-bold mb-4">Congrates!</h3>
//                 <img src="assets/coin.png" width="50px" class="flex mx-auto mb-4" alt="">
//                 <p class="mb-4">You Have Donated For Humankind</p>
//                 <h2 class="text-2xl font-bold mb-4">Successfully</h2>
//                 <div class="modal-action">
//                   <form method="dialog">
//                     <!-- if there is a button in form, it will close the modal -->
//                     <button class="btn ">Close</button>
//                   </form>
//                 </div>
//               </div>
//             </dialog>

        

//     `
// })
