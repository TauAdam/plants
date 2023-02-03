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
