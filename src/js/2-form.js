/* Работа с form */

const formData = {
    email: "",
    message: ""
}

// Ключ для "localStorage"
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
getLocalStorage();

// Событие 'input'
form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (!name) return;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Берёт из localStorage (если есть) и сохроняет в formData.
function getLocalStorage() {
    // из localStorage
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedData) return;

    // из localStorage в объект formData
    formData.email = savedData.email;
    formData.message = savedData.message;

    // из объекта formData в input.value
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// функция очищает поле и "localStorage" по ключу.
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // сброс формы до её первоначального состояния.
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log('formData ', formData);
})