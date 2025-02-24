import "./Services.css";
import { SiMedibangpaint } from "react-icons/si";

const Services = () => {
  return (
    <div className="services-page">
      <div className="one-service">
        <h1>
          <SiMedibangpaint />
        </h1>
        <p>
          Používám pouze kvalitní a certifikované tetovací barvy, které splňují
          nejpřísnější bezpečnostní normy. Dbám na zdravotní nezávadnost a
          dlouhou životnost barev, aby tvé tetování vypadalo skvěle i po letech.
          Každý detail je pro mě důležitý, proto vybírám jen ty nejlepší
          produkty pro dokonalý výsledek.
        </p>
      </div>
    </div>
  );
};

export default Services;
