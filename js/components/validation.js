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

    const messageEl = document.querySelector('.message');
    const messageTitle = messageEl.querySelector('.message__title');
    const messageText = messageEl.querySelector('.message__text');
    const closeButton = messageEl.querySelector('.message__close');

    closeButton.addEventListener("click", function() {
        messageEl.hidden = true;
    });

    validate.onSuccess(async function(event) {
        event.preventDefault();

        const formData = new FormData(formEl);
        const submitButton = formEl.querySelector('button[type="submit"]');

        submitButton.disabled = true;

        try {
            const response = await fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Не удалось отправить форму');
            }

            messageTitle.textContent = 'Регистрация прошла успешно';
            messageText.textContent = 'Ваша заявка отправлена';
            messageEl.hidden = false;
        } catch (error) {
            console.log('Ошибка отправки формы:', error);
            messageTitle.textContent = 'Ошибка отправки';
            messageText.textContent = 'Не удалось отправить форму. Попробуйте ещё раз';
            messageEl.hidden = false;
        } finally {
            submitButton.disabled = false;
        }
    });
} 