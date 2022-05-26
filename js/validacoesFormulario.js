const form = document.querySelector('form.form-auth');
const buttonForm = document.querySelector('form.form-auth button');
const inputsForm = document.querySelectorAll('form.form-auth input');

inputsForm.forEach((input) => {
    input.insertAdjacentHTML('afterend', '<span class="error" style="display:none">Campo incorreto</span>');
})

function ehInputValido(nome, valor) {
    if (!valor) {
        return { ehCampoValido: false, mensagem: 'Campo obrigatório' };
    }

    switch (nome) {
        case 'name':
            return valor.length > 20 && valor.length < 80 ? { ehCampoValido: true } : { ehCampoValido: false, mensagem: 'Deve ter entre 20 à 80 caracteres' };

        case 'surname':
            return valor.length > 2 && valor.length < 100 ? { ehCampoValido: true } : { ehCampoValido: false, mensagem: 'Deve ter entre 2 à 100 caracteres' };

        default:
            return { ehCampoValido: true };
    }
}

form.onsubmit = (event) => {
    const inputs = document.querySelectorAll('form.form-auth input');

    // undefined null '' 0 = negar uma vez vira verdadeiro
    let ehFormularioInvalido = false;

    inputs.forEach(input => {
        const resposta = ehInputValido(input.name, input.value);

        if (!resposta.ehCampoValido) {
            ehFormularioInvalido = true;
            input.nextElementSibling.style.display = 'block';
            input.nextElementSibling.innerHTML = resposta.mensagem;
        } else {
            input.nextElementSibling.style.display = 'none';
        }
    });

    if (ehFormularioInvalido) {
        event.preventDefault();
    }
}

buttonForm.insertAdjacentHTML('beforebegin', '<input type="date" name="birthday">');