document.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById('email')

    input.addEventListener('input', () => {
        const email = input.value.trim();
        if (email === "" || email.indexOf('@') === -1) {
            input.classList.add("invalid-input");
        } else {
            input.classList.remove("invalid-input");
        }
    })

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = input.value.trim();
        if (email !== "" && email.indexOf('@') !== -1) {
            alert(`Přihlášení k odběru úspěšné pro ${email}`);
            // Zde můžete přidat kód pro odeslání formuláře
        } else {
            input.classList.add("invalid-input");
            alert("Zadejte platný e-mail!");
        }
    })
})
