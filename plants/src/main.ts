import './index.scss';

const burger = <HTMLButtonElement>document.querySelector('.burger-menu');
const popup = document.querySelector('.popup') as HTMLDivElement;
const navBar = <HTMLDivElement>(
  document.querySelector('.header__list')?.cloneNode(true)
);

burger.onclick = (e: Event) => {
  e.preventDefault();
  popup?.classList.toggle('active');
  burger.classList.toggle('active');
  popup?.appendChild(navBar);
};

document.addEventListener('click', e => {
  if (e.target instanceof HTMLElement && e.target.closest('.menu__item')) {
    popup?.classList.remove('active');
    burger?.classList.remove('active');
  }
});

// Service
const serviceCards = document.querySelectorAll(
  '.card'
) as NodeListOf<HTMLDivElement>;

let activeButtons: HTMLButtonElement[] = [];

const serviceButtons = document.querySelectorAll(
  '.btn_service'
) as NodeListOf<HTMLButtonElement>;

serviceButtons.forEach((btn: HTMLButtonElement) => {
  btn.addEventListener('click', () => {
    if (activeButtons.length === 2 && !activeButtons.includes(btn)) {
      alert('пользователь не может нажать одновременно все три кнопки услуг.');
      return;
    }

    if (activeButtons.includes(btn)) {
      btn.classList.remove('btn_active');
      activeButtons = activeButtons.filter(item => item !== btn);
    } else {
      btn.classList.add('btn_active');
      activeButtons.push(btn);
    }

    addBlurEffect();
  });
});

function addBlurEffect() {
  serviceCards.forEach(card => {
    if (
      activeButtons.length === 0 ||
      activeButtons.some(btn => card.classList.contains(btn.id))
    ) {
      card.classList.remove('blur');
    } else {
      card.classList.add('blur');
    }
  });
}

// Prices
const accordionButtons = document.querySelectorAll('.accordion-item-closed');
const accordionContents = document.querySelectorAll('.accordion-content');
const dropDownButtons = document.querySelectorAll('.accordion__btn');

for (let i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener('click', function () {
    for (let j = 0; j < accordionContents.length; j++) {
      if (j !== i) {
        accordionContents[j].classList.remove('show');
        dropDownButtons[j].classList.remove('open');
      }
    }
    accordionContents[i].classList.toggle('show');
    dropDownButtons[i].classList.toggle('open');
  });
}

// Contacts
const citySelectDropdownButton = document.querySelector(
  '.city-select-btn'
) as HTMLImageElement;
const citySelectContent = document.querySelector(
  '.select-content'
) as HTMLDivElement;
const selectPlaceholder = document.querySelector(
  '.select-placeholder'
) as HTMLDivElement;

citySelectDropdownButton?.addEventListener('click', () => {
  selectPlaceholder?.classList.toggle('select_active');
  citySelectDropdownButton.classList.toggle('open');
  citySelectContent.classList.toggle('open');
});
const selectOptions = document.querySelectorAll(
  '.select-option'
) as NodeListOf<HTMLButtonElement>;

let selectedCityId = null;

selectOptions.forEach(option => {
  option.addEventListener('click', () => {
    selectPlaceholder?.classList.remove('select_active');
    citySelectDropdownButton.classList.remove('open');
    citySelectContent.classList.remove('open');

    selectPlaceholder.querySelector('p')!.textContent = option.innerText;
    selectedCityId = +option.id;
    renderCityCard(selectedCityId);
  });
});
const data = [
  {
    city: 'Canandaigua, NY',
    phone: '+1	585	393 0001',
    address: '151 Charlotte Street',
  },
  {
    city: 'New York City',
    phone: '+1	212	456 0002',
    address: '9 East 91st Street',
  },
  {
    city: 'Yonkers, NY',
    phone: '+1	914	678 0003',
    address: '511 Warburton Ave',
  },
  {
    city: 'Sherrill, NY',
    phone: '+1	315	908 0004',
    address: '14 WEST Noyes BLVD',
  },
];

const renderCityCard = (id: number) => {
  const card = data[id - 1];
  document.querySelector('#city-card')!.innerHTML = `
						<div class="city-card">
							<p><span class="black">City:</span> ${card.city}</p>
              <p><span class="black">Phone:</span> ${card.phone}</p>
              <p><span class="black">Office adress:</span> ${card.address}</p>
							<a class="btn_call" href="tel:${card.phone}">Call Us</a>
						</div>
							`;
};

console.log(`Самооценкa: 125/125

    При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50
        При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
        Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20
        Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
    Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50

    При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
    Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25

    В разделе contacts реализован select с выбором городов +25
        В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15
        При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10
`);
