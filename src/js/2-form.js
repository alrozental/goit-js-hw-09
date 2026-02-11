let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const stateKey = 'feedback-form-state';

const populateForm = () => {
  const savedData = localStorage.getItem(stateKey);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData = parsedData;

    for (const key in formData) {
      if (form.elements[key]) {
        form.elements[key].value = formData[key];
      }
    }
  }
};

populateForm();

form.addEventListener('input', event => {
  const key = event.target.name;
  const value = event.target.value.trim();

  formData[key] = value;

  localStorage.setItem(stateKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(stateKey);
  formData = { email: '', message: '' };
  form.reset();
});
