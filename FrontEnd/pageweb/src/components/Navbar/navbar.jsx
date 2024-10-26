import iconme from './assets/img/iconme.png';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={iconme} className="w-48 h-48 rounded-full shadow-lg" alt="Icono"/>
          </a>
          <div className="text-white text-lg font-bold">Mi Sitio</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">Inicio</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300">Sobre Nosotros</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
