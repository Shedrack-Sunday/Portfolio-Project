const navbar = document.querySelector('#navbar');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const popuplist = document.querySelectorAll('.pop-up-btn');

navbar.addEventListener('click', () => {
  navbar.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  navbar.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  navbar.classList.remove('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  navbar.classList.remove('hidden');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  navbar.classList.remove('hidden');
});

const dataCards = [
  {
    id: 0,
    url: './images/Portfolio-mobile.png',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/Shedrack-Sunday/',
  },
  {
    id: 1,
    url: './images/Portfolio-mobile.png',
    title: 'Keeping track of hundreds of components 1',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/Shedrack-Sunday/',
  },
  {
    id: 2,
    url: './images/Portfolio-mobile.png',
    title: 'Keeping track of hundreds of components 2',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/Shedrack-Sunday/',
  },
  {
    id: 3,
    url: './images/Portfolio-mobile.png',
    title: 'Keeping track of hundreds of components 3',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/Shedrack-Sunday/',
  },
  {
    id: 4,
    url: './images/Portfolio-mobile.png',
    title: 'Keeping track of hundreds of components 4',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/Shedrack-Sunday/',
  },
  {
    id: 5,
    url: './images/Portfolio-mobile.png',
    title: 'Keeping track of hundreds of components 5',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://github.com/Shedrack-Sunday/',
  },
];

const cardWorkDetailsMobile = (index) => `
  <article class="card-work-details-mobile">
          <button type="button" class="btn-close-details">
              <img src="./images/Icon-Cancel.png" alt="cancel icon">
          </button>
          <div class="card-image-details-mobile">
              <img src=${dataCards[index].url} alt="sample">
          </div>
          <h2 class="card-title-mobile">
              ${dataCards[index].title}
          </h2>
          <div class="card-tags-mobile">
              <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
          </div>
          <p class="card-paragraph-mobile">
            ${dataCards[index].description}
          </p>
          <div class="card-button-mobile  button">
              
                 <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./images/Icon-rel.png" alt="see live icon">
                  </a>
                  <a href=${dataCards[index].linkSource} class="btn-card-details-mobile button">
                  See Sources
                  <img src="./images/Icon-GitHub.png." alt="see github icon">
                  </a>
          </div>
          <script src="index.js"></script>
  </article>
  `;

for (let i = 0; i < popuplist.length; i += 1) {
  popuplist[i].addEventListener('click', () => {
    document.body.innerHTML = cardWorkDetailsMobile(i);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      window.location.reload();
    });
  });
}