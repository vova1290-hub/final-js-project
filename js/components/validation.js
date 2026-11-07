export function initValidation() {
    const formEl = document.querySelector('.questions__form');
    const nameEl = formEl.querySelector('#name');
    const emailEl = formEl.querySelector('#email');
    const agreeEl = formEl.querySelector('#agree');

    const validate = new JustValidate(formEl);

    validate.addField(nameEl, [
        {
            rule: "required",
            errorMessage: "Введите ваше имя",
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: "Введите минимум 3 символа",
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: "Введите максимум 20 символа",
        },
    ], {
        errorsContainer: '#name-error',
    });

    validate.addField(emailEl, [
        {
            rule: "required",
            errorMessage: "введите ваш email",
        },
        {
            rule: "email",
            errorMessage: "введите ваш email",
        },
    ], {
        errorsContainer: '#email-error',
    });

    validate.addField(agreeEl, [
        {
            rule: "required",
            errorMessage: "Подтвердите согласие на обработку данных",
        },
    ], {
        errorsContainer: '#agree-error',
    });
} 