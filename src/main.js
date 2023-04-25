import Swal from 'sweetalert2';

const sortBtn = document.getElementById('sort-btn');
const card = document.getElementById('card');
const characterName = document.getElementById('character-name');
const baseURL = "https://www.superheroapi.com/api.php/6068122033302389/"

const generateRandomNumber = () => {
  const id = Math.floor(Math.random() * 732);
  return id;
}

sortBtn.addEventListener('click', () => {
  card.innerHTML = '';
  characterName.innerHTML = '';

  fetch(`${baseURL}${generateRandomNumber()}`)
  .then((response) => response.json())
  .then((data) => {
    card.src = data.image.url;
    characterName.innerHTML = data.name;
  })
  .catch((error) =>
  Swal.fire({
    icon: 'error',
    title: 'Hero not found',
    text: error.message,
  }));
});
