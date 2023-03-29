import Swal from 'sweetalert2';

const img = document.querySelector('#img-pet');
const nameSH = document.querySelector('#nameSH');
const btnSort = document.querySelector('#btnSort');
const urlSh = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';
const max = 750;
const raffleId = () => Math.floor(Math.random() * max);

const alert = () => Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Não foi possível encontrar o herói!',
  footer: 'Tente outra vez',
});

const getHero = () => {
  const resultId = raffleId();
  fetch(`${urlSh}/${resultId}.json`)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response.name)
      nameSH.innerHTML = response.name;
      img.src = response.images.sm;
    })
    .catch(() => {
      // nameSH.innerHTML = 'Não foi possível encontrar o herói.';
      // console.warn(error.message);
      alert();
    });
};

btnSort.addEventListener('click', getHero);
