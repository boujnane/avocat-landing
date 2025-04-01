import Image from "next/image";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow h-screen flex flex-col justify-center items-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo_sangare_upscale.jpeg" // Remplace par le chemin de ton logo
            alt="Logo de Maître Jean Dupont"
            width={700} // Ajuste la taille selon ton logo
            height={700}
            className="object-contain"
          />
        </div>
        
        {/* Navbar */}
        <nav className="space-x-6">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Services
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">
            À propos
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Témoignages
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Contact
          </a>
        </nav>
      </header>

{/* Hero Section */}
<section className="bg-gradient-to-r from-[#013a7b] to-[#014ead] text-white py-20">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-5xl font-extrabold mb-4">Maître Joël Sangaré</h1>
    <p className="text-xl mb-8">
      Votre défense, notre engagement. Expertise et rigueur au service de vos droits.
    </p>
    <a
      href="#contact"
      className="bg-white text-[#014ead] py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
    >
      Prenez rendez-vous
    </a>
  </div>
</section>

{/* Services Section */}
<ServicesSection/>

{/* About Section */}
<section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2">
      <Image
        src="/photo-profil_joël.jpeg"
        alt="Maître Joël Sangaré"
        width={400}
        height={300}
        className="rounded-full shadow-lg border-4 border-white"
      />
    </div>
    <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">À propos de moi</h2>
      <p className="text-lg leading-relaxed mb-6 text-gray-700">
        Fort de plus de 15 ans d'expérience, je m'engage à défendre vos droits avec passion et intégrité. Mon approche repose sur une écoute attentive et une analyse rigoureuse de chaque dossier, afin de vous offrir la meilleure défense possible.
      </p>
      <a
        href="#contact"
        className="bg-blue-800 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
      >
        En savoir plus
      </a>
    </div>
  </div>
</section>


{/* Testimonials Section */}
<section id="testimonials" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-[#014ead] mb-12">Témoignages</h2>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <div className="bg-white p-8 rounded-lg shadow-lg flex-1 hover:shadow-2xl transition duration-300">
        <p className="italic mb-4">
          "Maître Sangaré m'a soutenu avec une grande efficacité et une écoute exceptionnelle. Un vrai partenaire dans mon combat juridique."
        </p>
        <p className="font-bold">- Client satisfait</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg flex-1 hover:shadow-2xl transition duration-300">
        <p className="italic mb-4">
          "Grâce à son expertise, j'ai pu obtenir un résultat favorable dans une situation complexe. Je recommande vivement ses services."
        </p>
        <p className="font-bold">- Client satisfait</p>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-[#134282] text-white">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
    <div className="max-w-lg mx-auto">
      <form className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 p-3 rounded"
            placeholder="Votre nom"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-3 rounded"
            placeholder="Votre email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 p-3 rounded"
            rows={5}
            placeholder="Votre message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#014ead] text-white py-3 rounded-full font-semibold hover:bg-[#134282] transition duration-300"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-200 py-6">
  <div className="container mx-auto px-6 text-center text-gray-700">
    <p>&copy; {new Date().getFullYear()} Maître Jean Dupont. Tous droits réservés.</p>
  </div>
</footer>
    </div>
  );
}
