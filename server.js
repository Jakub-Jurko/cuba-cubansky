const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware pro CORS (opravuje chybu "CORS policy blocked")
app.use(cors());
app.use(express.json()); // Umožní backendu číst JSON data z formuláře

// 🚀 API endpoint pro odeslání e-mailu
app.post("/send-email", async (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: "Vyplňte všechna pole." });
    }

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "jurko551@gmail.com", // Sem dej svůj e-mail
            pass: "cdpkruckfbeiyjre", // NE běžné heslo, musíš si vygenerovat nové (viz návod dole)
        },
    });

    let mailOptions = {
        from: email,
        to: "jurko551@gmail.com",
        subject: "Nová zpráva z webu",
        text: `E-mail: ${email}\n\nZpráva:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "E-mail úspěšně odeslán!" });
    } catch (error) {
        console.error("Chyba při odesílání e-mailu:", error);
        res.status(500).json({ error: "Nepodařilo se odeslat e-mail." });
    }
});

// 🚀 Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
