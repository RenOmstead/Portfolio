document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("contact-form-status");
    const recipient = "laurenaomstead@gmail.com";

    if (!form) {
        return;
    }


    // The site has no server, so sending opens the visitor's email app
    // with the message already written and addressed.
    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const company = form.elements.company.value.trim();
        const message = form.elements.message.value.trim();

        const subject = `Portfolio message from ${name}`;
        const signature = [name, company, email].filter(Boolean).join("\n");
        const body = `${message}\n\n${signature}`;

        window.location.href =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        if (status) {
            status.hidden = false;
        }

    });

});
