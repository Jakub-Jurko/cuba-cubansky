import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Stav pro zakázání tlačítka

    const API_URL =
        process.env.REACT_APP_API_URL || "https://cuba-cubansky-backend.onrender.com/send-email";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return; // Zabrání opakovanému odeslání

        setIsSubmitting(true);;

        try {
            const response = await fetch(API_URL, {
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
        } finally {
            setIsSubmitting(false); // Po dokončení povolit tlačítko
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Tvůj e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
            />
            <textarea
                placeholder="Tvoje zpráva"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={isSubmitting}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Odesílání..." : "Odeslat"}
            </button>
            {status && (
                <p className={`status ${status.includes("úspěšně") ? "success" : "error"}`}>
                    {status}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
