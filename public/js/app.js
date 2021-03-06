const fecthLocation = (location) => {
    var messageOne = document.querySelector('#message-1');
    var messageTwo = document.querySelector('#message-2');
    messageOne.textContent = 'fetching data...';
    messageTwo.textContent = '';
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forcast;
            }
        });

    });
};
var weatherForm = document.querySelector('form');
var searchInput = document.querySelector('input');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = searchInput.value;
    fecthLocation(location);

});