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

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function onFormSubmit(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;
  const trimmedEmail = email.value.trim();
  const trimmedMessage = message.value.trim();

  if (!validateEmail(trimmedEmail)) {
    alert('Будь ласка, введіть дійсну адресу електронної пошти');
    return;
  }

  if (trimmedMessage.length < 10) {
    alert('Будь ласка, введіть повідомлення довжиною не менше 10 символів');
    return;
  }

  console.log({ email: trimmedEmail, message: trimmedMessage });

  if (localStorage.getItem(STORAGE_KEY)) {
    localStorage.removeItem(STORAGE_KEY);
  }

  event.currentTarget.reset();
  formData = {};
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
