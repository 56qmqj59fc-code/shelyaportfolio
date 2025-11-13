/*темная тема*/

document.body.insertAdjacentHTML('afterbegin', 
  '<button id="themeToggle">Темная тема</button>');

const themeBtn = document.querySelector('#themeToggle');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeBtn.textContent = 'Светлая тема';
  } else {
    themeBtn.textContent = 'Темная тема';
  }
}

themeBtn.addEventListener('click', toggleTheme);




/*скрытие блоков*/

function addToggleButtons() {
  const headers = document.getElementsByTagName('h1');

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Скрыть';
    toggleBtn.classList.add('toggle-button'); 

    header.parentNode.insertBefore(toggleBtn, header.nextSibling);

    let section = header.nextElementSibling;
    while (section && section.tagName !== 'SECTION') {
      section = section.nextElementSibling;
    }

    toggleBtn.addEventListener('click', function() {
      section.style.display = section.style.display === 'none' ? '' : 'none';
      this.textContent = section.style.display === 'none' ? 'Показать' : 'Скрыть';
    });
  }
}
window.onload = addToggleButtons;