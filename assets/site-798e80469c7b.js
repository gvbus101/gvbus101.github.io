const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#primary-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation?.classList.toggle('open', open);
  menu.textContent = open ? 'Close ×' : 'Menu ☰';
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.click();
    menu.focus();
  }
});
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
let previouslyOpen = [];
window.addEventListener('beforeprint', () => {
  previouslyOpen = [...document.querySelectorAll('details')].map(item => [item, item.open]);
  previouslyOpen.forEach(([item]) => item.open = true);
});
window.addEventListener('afterprint', () => previouslyOpen.forEach(([item, open]) => item.open = open));
