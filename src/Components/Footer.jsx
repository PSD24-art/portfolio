export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black/80 border-t border-gray-800 text-gray-400"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-white">Prathamesh S. Dahake</h1>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="#projects"
            className="hover:text-fuchsia-500 transition-colors"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-fuchsia-500 transition-colors">
            About
          </a>
          <a
            href="#contactMe"
            className="hover:text-fuchsia-500 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-6 text-xl">
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
