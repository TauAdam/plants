import './index.scss';

const burger = <HTMLButtonElement>document.querySelector('.burger-menu');
const popup = document.querySelector('.popup');
const navBar = <HTMLDivElement>(
  document.querySelector('.header__list')?.cloneNode(true)
);

burger.onclick = e => {
  e.preventDefault();
  popup?.classList.toggle('active');
  burger.classList.toggle('active');
  popup?.appendChild(navBar);
};
const liArray = <HTMLUListElement>document.querySelector('.header__list');
liArray.onclick = () => {
  popup?.classList.remove('active');
  burger?.classList.remove('active');
};
