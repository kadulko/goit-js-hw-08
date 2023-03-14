import throttle from 'lodash.throttle';
import storage from './storage';
const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formStateStamp = {
  email: '',
  message: '',
};

function loadFormData() {
  //loads form data stored in localStorage, if any
  if (storage.load(LOCALSTORAGE_KEY)) {
    const formState = storage.load(LOCALSTORAGE_KEY);
    feedbackForm.email.value = formState.email;
    feedbackForm.message.value = formState.message;
  }
}

loadFormData();

function updateFormState(event) {
  // updates formStateStamp with form state data on every input event
  const {
    elements: { email, message },
  } = event.currentTarget;

  formStateStamp.email = email.value;
  formStateStamp.message = message.value;
}

function onSubmit(event) {
  //sends form data to console, removes local storage key and clears form
  event.preventDefault();

  const formData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };

  console.log(formData);

  storage.remove(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}

feedbackForm.addEventListener('input', updateFormState);
feedbackForm.addEventListener(
  'input',
  throttle(() => {
    storage.save(LOCALSTORAGE_KEY, formStateStamp);
  }, 500)
);
feedbackForm.addEventListener('submit', onSubmit);
