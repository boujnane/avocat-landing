"use client";

import { useState } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("famille");

  const services = {
    famille: {
      title: "Droit de la famille",
      description:
        "Accompagnement personnalisé pour divorces, gardes d'enfants et autres problématiques familiales.",
    },
    penal: {
      title: "Droit pénal",
      description:
        "Défense rigoureuse et adaptée pour vous accompagner en cas d'accusations pénales.",
    },
    affaires: {
      title: "Droit des affaires",
      description:
        "Conseils et représentation pour vos besoins juridiques en entreprise et contrats commerciaux.",
    },
    immobilier: {
      title: "Droit immobilier",
      description:
        "Assistance juridique dans les transactions immobilières et la gestion des conflits relatifs à la propriété.",
    },
    travail: {
      title: "Droit du travail",
      description:
        "Protection de vos droits en tant que salarié ou employeur, incluant les conflits liés au travail et au licenciement.",
    },
    etrangers: {
      title: "Droit des étrangers",
      description:
        "Accompagnement juridique pour les demandes de visa, de résidence et les démarches liées à l'immigration.",
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#014ead] mb-12">
          Nos Services
        </h2>
        <div className="flex justify-center mb-10">
          <div className="flex space-x-6">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                className="text-lg text-[#014ead] font-semibold py-3 px-6 transition-all duration-300 transform hover:scale-105 hover:bg-[#014ead] hover:text-white rounded-lg shadow-lg"
                onClick={() => setActiveService(key)}
              >
                {services[key].title}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-10 transition-all duration-500 ease-in-out transform hover:scale-105">
          <h3 className="text-3xl font-semibold text-[#014ead] mb-6">
            {services[activeService].title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {services[activeService].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
