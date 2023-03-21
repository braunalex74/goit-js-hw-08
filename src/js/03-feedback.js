import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', event => {
//   formData[event.target.name] = event.target.value;
// });

populateTextarea();

function onTextareaInput(event) {
  formData = {
    email: refs.input.value.trim(),
    message: refs.textarea.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  console.log({ email: email.value.trim(), message: message.value.trim() });

  if (localStorage.getItem(STORAGE_KEY)) {
    localStorage.removeItem(STORAGE_KEY);
  }
  event.currentTarget.reset();
  formData = {};
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (!savedMessage) {
    return;
  }
  formData = JSON.parse(savedMessage);
  refs.input.value = formData.email ?? '';
  refs.input.value = formData.message ?? '';
}
