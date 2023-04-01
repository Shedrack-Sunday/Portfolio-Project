const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const arrayBtnPopup = document.querySelectorAll('.btn-popup');
const form = document.querySelector('.form-input');
const [fullName, firstName, lastName, email, textArea] = form.elements;

const mediaqueryList = window.matchMedia('(max-width: 768px)');

const screenTest = (e) => {
  if (e.matches) {
    fullName.required = true;
    firstName.required = false;
    lastName.required = false;
  } else {
    fullName.removeAttribute('required');
    firstName.required = true;
    lastName.required = true;
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);

let inputData = {};
if (localStorage.savedForm) {
  inputData = JSON.parse(localStorage.getItem('savedForm'));
}

fullName.addEventListener('change', () => {
  inputData.fullName = fullName.value;
});

firstName.addEventListener('change', () => {
  inputData.firstName = firstName.value;
});

lastName.addEventListener('change', () => {
  inputData.lastName = lastName.value;
});

email.addEventListener('change', () => {
  inputData.email = email.value;
});

textArea.addEventListener('change', () => {
  inputData.textArea = textArea.value;
});

const fillDataInput = () => {
  if (inputData.fullName) {
    fullName.value = inputData.fullName;
  }
  if (inputData.firstName) {
    firstName.value = inputData.firstName;
  }
  if (inputData.lastName) {
    lastName.value = inputData.lastName;
  }
  if (inputData.email) {
    email.value = inputData.email;
  }
  if (inputData.textArea) {
    textArea.value = inputData.textArea;
  }
};

const populateFields = () => {
  localStorage.setItem('savedForm', JSON.stringify(inputData));
  fillDataInput();
};
populateFields();
form.onchange = populateFields;

const errMsgEmail = document.querySelector('small');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = /[A-Z]/;
  if (!regex.test(email.value)) {
    form.submit();
  } else {
    errMsgEmail.innerText = 'Please enter only lower case';
  }
});

const dataCards = [
  {
    id: 0,
    url: './assest/ConfrencePage.png',
    title: 'Conference-Page-Design',
    description:
      'Final Project from HTML and CSS course. An imaginary conference page app that details a cloud computing event',
    tecnologies: {
      tech1: 'JavaScript',
      tech2: 'css',
      tech3: 'Figma',
      tech4: 'html',
    },
    linkVersion: 'https://shedrack-sunday.github.io/Conference-Page-Design/',
    linkSource: 'https://github.com/Shedrack-Sunday/Conference-Page-Design',
  },
  {
    id: 1,
    url: './assest/leaderboard.png',
    title:
      ' A board built, utilizing callbacks and promises, proper ES6 syntax. ES6 modules to write modular JavaScript. Use webpack to bundle JavaScript.',
    description: `The leaderboard is a page that let users ADD books based on authors and the respective books.
    it fetches the data from an external API, then displays the resulting information on the screen.`,
    tecnologies: {
      tech1: 'Javastcrip',
      tech2: 'webpack',
      tech3: 'CSS',
      tech4: 'GIthiub Actions',
    },
    linkVersion: 'https://shedrack-sunday.github.io/Leaderboard/dist/',
    linkSource: 'https://github.com/Shedrack-Sunday/Leaderboard',
  },
  {
    id: 2,
    url: './assest/books.png',
    title: 'Awesome Books',
    description: ' A Book app to add authors and their books. Built with JavaScript, Html, and CSS.  ',
    tecnologies: {
      tech1: 'Webpack',
      tech2: 'Html',
      tech3: 'JavaScript',
      tech4: 'css',
    },
    linkVersion: 'https://shedrack-sunday.github.io/Awesome-Book/',
    linkSource: 'https://github.com/Shedrack-Sunday/Awesome-Book',
  },
  {
    id: 3,
    url: './assest/img/fucusap.png',
    title: 'FascalFocus Budget App',
    description: `The FiscalFucus web app is a budget app that allows users to add categories and get a summary of such. Built with Ruby on Rails, Postgres, device for authentication, cancan and Rspec for testing, and bootstrap for styling`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'Boostrap',
      tech3: 'Postgress',
      tech4: 'Rspec',
    },
    linkVersion: 'https://fascalfocus1.onrender.com/',
    linkSource: 'https://github.com/Shedrack-Sunday/FiscalFocus',
  },
  {
    id: 4,
    url: './assest/img/carRent.png',
    title: 'Exiotic Car rent web app',
    description: `Exotic Rentals is a car rental agencies primarily serve people who require a temporary vehicle, It allows users to create an account, log in, and book a car for a specific period of time. It also allows users to view all available cars, and view a specific car. It also allows users to view all bookings made by a specific user.`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'React',
      tech3: 'Postgress',
      tech4: 'Tailwind',
    },
    linkVersion: 'https://rent-a-car-seven.vercel.app/',
    linkSource: 'https://github.com/didierganthier/rent-a-car-backend/',
  },
  {
    id: 5,
    url: './assest/img/StockReact.png',
    title: 'Keeping track of hundreds of components 5',
    description: `A Web App that displays the US stock market's best-performing stocks and details about each. Built with ReactJS, Material UI, and ReduxToolkit.`,
    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://react-stock-data-project.vercel.app/',
    linkSource: 'https://github.com/Shedrack-Sunday/React-Stock-Data-Project',
  },
];

const cardWorkDetailsMobile = (index) => `
  <article class="card-work-details-mobile">
          <button type="button" class="btn-close-details">
              <img src="./assest/Icon-Cancel.svg" alt="cancel icon">
          </button>
          <div class="card-image-details-mobile">
              <img src=${dataCards[index].url} alt="a guy with a backpack in mountain">
          </div>
          <h2 class="card-title-mobile">
              ${dataCards[index].title}
          </h2>
          <ul class="card-tags-mobile">
              <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech4}</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${dataCards[index].description}
          </p>
          <div class="card-button-mobile">
                  <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./assest/see_live_icon.svg" alt="see live icon">
                  </a>
                  <a href=${dataCards[index].linkSource} class="btn-card-details-mobile">
                  See Sources
                  <img src="./assest/github_white.svg" alt="see github icon">
                  </a>
          </div>
          <script src="index.js"></script>
  </article>
  `;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < arrayBtnPopup.length; i++) {
  arrayBtnPopup[i].addEventListener('click', () => {
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkDetailsMobile(i);
    document.body.appendChild(cardWork);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      document.body.removeChild(cardWork);
    });
  });
}
