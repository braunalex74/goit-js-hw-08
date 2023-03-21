import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form', textarea),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onTextareaInput(event) {
  const message = event.currentTarget.value;
  localStorage.setItem('feedback-form-state', message);
}
