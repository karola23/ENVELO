var button = document.getElementById('button');

function firstEventHandler() {
    alert('pierwsza funkcja obslugujaca zdarzenie');
};

function secondEventHandler() {
    alert('a to druga funkcja obslugujaca zdarzenie')
};

button.addEventListener('click', firstEventHandler, false);
button.addEventListener('click', secondEventHandler, false);
button.addEventListener('click', function() {
    alert('a to funkcja anonimowa');
}, false);