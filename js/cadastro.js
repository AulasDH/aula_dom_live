/*
    div .avatar-content

    <div>
        <elemento class="avatar-content"></elemento>
    </div>

    div.avatar-content

    <div class="avatar-content"></div>
*/
function adicionarStrongParaUsername() {
    const tagUsername = document.querySelector('nav div.avatar-content div');


    tagUsername.innerHTML = '<strong>Nome Usuário</strong>'
}

function substituirPlaceHolderInputName() {
    const tagInputName = document.querySelector('form.form-auth input[name="name"]');

    tagInputName.placeholder = 'Digite seu primeiro nome';
}

function arredondarBordasDosInputs() {
    const tagInputs = document.querySelectorAll('form.form-auth input');

    // border-radius kebeb-case
    // borderRadius camelCase

    tagInputs.forEach(input => {
        input.style.borderRadius = '4px';
    });
}

function mudarDisplayDoForm() {
    const tagForm = document.querySelector('form.form-auth');

    // tagForm.style.display = 'flex';
    // tagForm.style.flexDirection = 'column';

    tagForm.style.cssText = 'display: flex; flex-direction: column';
}

adicionarStrongParaUsername();
substituirPlaceHolderInputName();
arredondarBordasDosInputs();
mudarDisplayDoForm();