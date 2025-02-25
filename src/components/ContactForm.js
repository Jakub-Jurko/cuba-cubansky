import React, { useState } from "react";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus("E-mail úspěšně odeslán!");
                setEmail("");
                setMessage("");
            } else {
                setStatus(`Chyba: ${data.error}`);
            }
        } catch (error) {
            setStatus("Nepodařilo se odeslat e-mail.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Váš e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Vaše zpráva"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit">Odeslat</button>
            {status && <p>{status}</p>}
        </form>
    );
};

export default ContactForm;
