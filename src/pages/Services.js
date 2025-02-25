import "./Services.css";
import { IoIosColorPalette } from "react-icons/io";
import { GiHealthIncrease } from "react-icons/gi";
import { MdSupervisorAccount } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";
import { motion } from "framer-motion";





const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}>
    <div className="services-page">
      <div className="one-service">
        <h1>
          <FaDroplet />
        </h1>
        <p>
          <h3>Kvalitní barvy</h3>
          Používám pouze kvalitní a certifikované tetovací barvy, které splňují nejpřísnější bezpečnostní normy a jsou zdravotně nezávadné. Dbám na to, aby každá barva měla dlouhou životnost a zůstala živá a krásná i po letech. Každý detail je pro mě klíčový, proto vybírám pouze ty nejlepší produkty, které garantují nejen skvělý vzhled tetování, ale i jeho trvanlivost. Mým cílem je, aby tvé tetování vypadalo skvěle jak ihned po aplikaci, tak i po dlouhém čase, bez ztráty na kvalitě a intenzitě barev.
        </p>
      </div>
      <div className="one-service">
        <h1>
          <GiHealthIncrease />
        </h1>
        <p>
          <h3>Bezpečnost</h3>
          Používám pouze kvalitní a certifikované vybavení, které splňuje všechny přísné bezpečnostní normy a standardy. Dbám na to, aby každý krok procesu byl bezpečný, komfortní a bez rizika. Každý detail, od nástrojů po použití barev, je pro mě důležitý, abych zajistil nejen dokonalý a precizní výsledek, ale i tvé maximální pohodlí a spokojenost během celého tetování. Můj cíl je, aby se každý klient cítil v bezpečí a s důvěrou si užíval svůj tetovací zážitek.
        </p>
      </div>
      <div className="one-service">
        <h1>
          <MdSupervisorAccount />
        </h1>
        <p>
          <h3>Individuální přístup</h3>
          Každému klientovi se věnuji s individuálním přístupem, abych zajistil, že tetování bude přesně odpovídat jeho představám a požadavkům. Rád s tebou proberu všechny detaily a zajistím, aby design byl naprosto jedinečný. Ať už máš konkrétní představu, nebo potřebujete pomoc s nápadem, není problém navrhnout nebo nakreslit tetování přesně podle tvých přání. Cílem je vytvořit něco, co ti bude nejen skvěle sedět, ale i dlouhodobě přinášet radost.
        </p>
      </div>
      <div className="one-service">
        <h1>
          <IoIosColorPalette />
        </h1>
        <p>
          <h3>Barevné tetování</h3>
          Nabízím širokou možnost barevného tetování, kde si můžeš vybrat z pestré palety kvalitních a certifikovaných barev. Každá barva je pečlivě vybrána, aby zajistila dlouhou trvanlivost a živost tetování. Společně najdeme ty nejlepší odstíny, které dokonale ladí s tvým designem a stylem. Můžeš si tak být jistý/á, že tvé tetování bude nejen originální, ale i nádherně barevné a detailní, přesně podle tvých představ.
        </p>
      </div>
    </div>
    </motion.div>
  );
};

export default Services;
