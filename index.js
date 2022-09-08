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
  <div class="modal-wrapper">
    <article class="modal">
          <div class="close-area">
            <button type="button">
              <img src="./images/Icon-Cancel.png" alt="cancel icon">
            </button>
          </div>
          <div>
              <img class="modal-image" src=${dataCards[index].url} alt="sample">
          </div>
          <div class="modal-content">
            <div class="title-container">
              <h2 class="modal-title">
              ${dataCards[index].title}
              </h2>
              <div class="card-tags-mobile">
                <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
                <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
                <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
              </div>
            </div> 
            <div class="modal-btn">
              <a href=${dataCards[index].linkVersion} class="custom-btn">
                See Live
                <img src="./images/Icon-rel.png" alt="see live icon">
              </a>
              <a href=${dataCards[index].linkSource} class="custom-btn">
                See Sources
                <img src="./images/Icon-GitHub.png" alt="see github icon">
              </a>
            </div>
            <p class="modal-desc">
              ${dataCards[index].description}
            </p>
          </div>
          
          <script src="index.js"></script>
    </article>
  </div>
  `;

for (let i = 0; i < popuplist.length; i += 1) {
  popuplist[i].addEventListener('click', () => {
    document.body.innerHTML = cardWorkDetailsMobile(i);
    const btnCloseDetailsMobile = document.querySelector('.close-area');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      window.location.reload();
    });
  });
}

const form = document.getElementById('form-main');
const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value.toLowerCase() == email.value) {
    form.submit();
  } else {
    error.innerHTML = 'Please input email in lower case';
  }
});