document.getElementById('history-btn-main').addEventListener('click', function(event){
    event.preventDefault();
    showAsectionById('history-section');
    document.getElementById('donation-btn-main').classList.remove('bg-lime-300');
    document.getElementById('history-btn-main').classList.add('bg-lime-300');
    // document.getElementById('history-btn-main').classList.add('hover:bg-lime-300');
    
    document.getElementById('footer-section').classList.remove('hidden');
    
});

document.getElementById('donation-btn-main').addEventListener('click', function(event){
    event.preventDefault();
    showAsectionById('content-section');
    document.getElementById('history-btn-main').classList.remove('bg-lime-300');
    document.getElementById('donation-btn-main').classList.add('bg-lime-300');
    // document.getElementById('donation-btn-main').classList.add('hover:bg-lime-300');

})




document.getElementById('donation-btn-main').addEventListener('click', function(){
    showAsectionById('content-section')
})


// get time
// const d = new Date();
// let diff = d.getTimezoneOffset();
// console.log(diff);

const d = new Date();
let text = d.toLocaleTimeString()
console.log(text);

const tar = new Date();
let tarikh = d.toLocaleDateString();
console.log(tarikh);

// const doo = new Date();
// let loc = d.toUTCString();
// console.log(loc);

