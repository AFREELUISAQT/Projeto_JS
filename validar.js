function validar(event) {
    event.preventDefault()

    var todo_correcto = true;
    var err = document.querySelector('#err')
    err.style.color = 'yellow'

    var expresion = /\w+@\w+\.+[a-z]/;
    var menssagemErr = []

    if (document.form.name.value == "") {
        todo_correcto = false;
        menssagemErr.push("⚠️ Preenche o nome por favor...")
        document.form.name.focus()

    } else if (document.form.email.value == "") {
        todo_correcto = false;
        menssagemErr.push("⚠️ Preenche o email por favor...")
        document.form.email.focus()

    } else if (!expresion.test(document.form.email.value)) {
        todo_correcto = false;
        menssagemErr.push("⚠️ Preenche um email válido por favor...(no formato 'usuario@dominio.com').")
    }

    else if (document.form.assunto.value == "") {
        todo_correcto = false;
        menssagemErr.push("⚠️ Preenche o assunto por favor...")
        document.form.assunto.focus()

    } else if (document.form.textarea.value == "" || document.form.textarea.value.length > 150) {
        todo_correcto = false;
        menssagemErr.push("⚠️ Preenche a mensagem por favor... (contendo no maximo 150 carateres).")
        document.form.textarea.focus()

    }

    err.innerHTML = menssagemErr.join(',')

    if (todo_correcto) {
        alert('Mensagem enviada com Sucesso!!!');
        document.getElementById("form").reset();
    }

    return !todo_correcto;

}


document.querySelector('form').addEventListener('submit', validar)

