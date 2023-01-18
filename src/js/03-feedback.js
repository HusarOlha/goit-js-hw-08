import throttle from 'lodash.throttle';

const formData = {};

const LOCAL_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaInput, 1000));

populateTextArea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

  localStorage.removeItem('LOCAL_KEY');

  if (localStorage.getItem('LOCAL_KEY')) {
    const parseData = JSON.parse(localStorage.getItem('CURRENT_TIME'));
    console.log(parseData);
  }
}

function onTextAreaInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem('LOCAL_KEY', formData);
}

function populateTextArea() {
  const savedMessage = localStorage.getItem('LOCAL_KEY');

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
