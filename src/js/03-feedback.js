import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form', textarea),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
