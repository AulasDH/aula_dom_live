const form = document.querySelector('form.form-auth');
const buttonForm = document.querySelector('form.form-auth button');
const inputsForm = document.querySelectorAll('form.form-auth input');

inputsForm.forEach((input) => {
    input.insertAdjacentHTML('afterend', '<span class="error" style="display:none">Esse campo é obrigatório</span>');
})

function ehInputValido(name, value) {
    if (!value) {
        return false;
    }

    switch (name) {
        case 'name':
            return value.length > 20 && value.length < 80;

        case 'surname':
            return value.length > 2 && value.length < 100;

        default:
            return true;
    }
}

form.onsubmit = (event) => {
    const inputs = document.querySelectorAll('form.form-auth input');

    // undefined null '' 0 = negar uma vez vira verdadeiro
    let ehFormularioInvalido = false;

    inputs.forEach(input => {
        ehFormularioInvalido = ehInputValido(input.name, input.value);

        if (!ehFormularioInvalido) {
            ehFormularioInvalido = true;
            input.nextElementSibling.style.display = 'block';
        } else {
            input.nextElementSibling.style.display = 'none';
        }
    });

    if (ehFormularioInvalido) {
        event.preventDefault();
    }
}

buttonForm.insertAdjacentHTML('beforebegin', '<input type="date" name="birthday">');