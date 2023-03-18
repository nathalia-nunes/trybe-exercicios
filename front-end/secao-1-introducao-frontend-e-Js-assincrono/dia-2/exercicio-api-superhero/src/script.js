const img = document.querySelector('#img');
const nameSH = document.querySelector('#nameSH');
const btnSort = document.querySelector('#btnSort');
const urlSh = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';
const max = 750;
const raffleId = () => Math.floor(Math.random() * max);

const getHero = () => {
  const resultId = raffleId();
  fetch(`${urlSh}/${resultId}.json`)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response.name)
      nameSH.innerHTML = response.name;
      img.src = response.images.md;
    })
    .catch((error) => {
      nameSH.innerHTML = 'Não foi possível encontrar o herói.';
      console.warn(error.message);
    });
};

btnSort.addEventListener('click', getHero);
