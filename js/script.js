//#1 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно
const radioButtons = document.querySelectorAll('input[name="color"]');

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
        document.body.style.background = event.currentTarget.value;
    });
});

//#2 Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
const input = document.querySelector("#name-input");
const inputWithDetails = document.querySelector("#validation-input");
const minMaxLength = parseInt(inputWithDetails.dataset.length);
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    span.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length === 0) {
        span.textContent = "незнайомець"
    }
});

inputWithDetails.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === minMaxLength) {
        inputWithDetails.style.border = "5px solid green";
    } else {
        inputWithDetails.style.border = "5px solid red";
    }
});

//#3  Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
const inputFontSizeControler = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputFontSizeControler.addEventListener("input", (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`
});