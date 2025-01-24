// TODO: write code here
// import { mdConvert } from 'md-converter';

console.log('app.js bundled');

const fileContainer = document.querySelector('.file-container');
const fileInput = fileContainer.querySelector('.overlapped');

const fileTitle = document.querySelector('.preview-title');
// const previewText = document.querySelector('.preview-text');
// const previewHtml = document.querySelector('.preview-html');
const previewlmage = document.querySelector('.preview-image');

fileContainer.addEventListener('click', (e) => {
  console.log(e);

  // console.log('click');

  fileInput.dispatchEvent(new MouseEvent('click'));
});

fileContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
});

fileContainer.addEventListener('drop', (e) => {
  e.preventDefault();

  console.log('drop');
  // console.log(e);
  console.log(e.dataTransfer.files && e.dataTransfer.files[0]);

  previewlmage.src = URL.createObjectURL(e.dataTransfer.files && e.dataTransfer.files[0]);
});

// const displayTextConvert = (e) => {
//   console.log(e);

//   previewText.textContent = e.target.result;
// };

// const displayMdConvert = (e) => {
//   console.log(e);

//   previewHtml.innerHTML = mdConvert(e.target.result);
// };

// const displayImageConvert = (e) => {
//   console.log(e);
//   // console.log('qqq');
//   previewlmage.src = e.target.result; // console.log(previewlmage);
// };

fileInput.addEventListener('change', (e) => {
  console.log(e);
  console.dir(fileInput);

  const file = fileInput.files && fileInput.files[0];

  if (!file) return;

  fileTitle.textContent = file.name;

  const url = URL.createObjectURL(file);

  const link = document.createElement('a'); // создали ссылку

  link.href = url; // добавляем необходимые атрибуты, в href кладём url
  link.rel = 'noopener'; // обеспечивает именно скачивание, а не открытие
  link.download = file.name; // download обеспечивает имя файла, file.name - какое имя было.

  link.click(); // ну и кликним за пользователя по этой ссылки

  console.log(url);
});

const items = document.querySelector('.items');
// const itemsElements = items.querySelector('.items-item');

let actualElement;

const onMouseOver = (e) => {
  console.log(e);

  actualElement.style.top = `${e.clientY}px`;
  actualElement.style.left = `${e.clientX}px`;
};

const onMouseUp = (e) => {
  const mouseUpItem = e.target;
  // console.log(mouseUpItem);
  items.insertBefore(actualElement, mouseUpItem);

  actualElement.classList.remove('dragged');

  actualElement = undefined;

  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseover', onMouseOver);
};

items.addEventListener('mousedown', (e) => {
  e.preventDefault();
  actualElement = e.target;

  actualElement.classList.add('dragged');

  document.documentElement.addEventListener('mouseup', onMouseUp);
  document.documentElement.addEventListener('mouseover', onMouseOver);
});

// console.log(link); // на самом деле ссылка ни на странице ни в разметке не появилась
// (её туда не вставляли)

//     // Первый способ вставки картинки:
// // const reader = new FileReader();

// // // // reader.addEventListener('load', displayTextConvert);
// // // // reader.addEventListener('load', displayMdConvert);

// // reader.addEventListener('load', displayImageConvert);
// // reader.readAsDataURL(file);

//     // Второй способ вставки картинки:
// const url = URL.createObjectURL(file);

// previewlmage.src = url;

// // URL.revokeObjectURL(url); // для очистки памяти - картинка не появляется на странице
// setTimeout(() => URL.revokeObjectURL(url), 0); // - setTimeout - даёт картинке загрузится
//  а потом удаляет ссылку из памяти.
