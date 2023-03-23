import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateForm();

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

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (email.trim() === '') {
    alert('Будь ласка, введіть свою електронну адресу.');
    return false;
  } else if (!isValidEmail(email)) {
    alert('Будь ласка, введіть дійсну адресу електронної пошти.');
    return false;
  }
  return true;
}

function populateForm() {
  let savedmessage = localStorage.getItem(STORAGE_KEY);

  if (!savedmessage) {
    return;
  }
  formData = JSON.parse(savedmessage);
  refs.input.value = formData.email ?? '';
  refs.textarea.value = formData.message ?? '';
}
