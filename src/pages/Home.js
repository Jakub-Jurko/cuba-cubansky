import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
    <div className="home-page">
      <section className="section">
        <h4>Ahoj, </h4>
        <p>
          Jsem tatér samouk a každé tetování pro mě znamená něco víc než jen
          obraz na pokožce. Každé dílo je pro mě jedinečným příběhem, který
          vyprávím skrze inkoust. Věřím, že tetování je osobní
          záležitostí, která by měla odrážet jedinečnost každého člověka, jeho
          životní cestu a zkušenosti. Proto se zaměřuji na detaily, abych
          vytvořil kousky, které budou nejen krásné, ale i autentické a
          emotivní.
        </p>

        <p>
          Neváhej mě kontaktovat, pokud máš vlastní nápad nebo představu.
          Každý návrh připravuji individuálně podle tvých přání a představ, a
          pokud si nejsi jistý/á, rád ti pomohu s vytvořením návrhu, který bude
          dokonale ladit s tvým stylem a osobností. Mým cílem je, aby každý
          si odcházel/a s pocitem, že si dostal/a něco, co je pro tebe skutečně
          výjimečné a unikátní.
        </p>

        <p>
          Tetování není jen o estetice – je to forma vyjádření, která zůstává na
          těle navždy. Těším se na spolupráci a na to, že společně vytvoříme
          něco, co bude pro vás mít opravdu hluboký význam.
        </p>
      </section>
    </div>
    </motion.div>

  );
};

export default Home;
