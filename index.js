const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const checkin = document.querySelector('#checkin').value;
  const checkout = document.querySelector('#checkout').value;
  const rooms = document.querySelector('#rooms').value;
  const guests = document.querySelector('#guests').value;
  alert(`You have booked ${rooms} room(s) for ${guests} guest(s) from ${checkin} to ${checkout}.`);
});
