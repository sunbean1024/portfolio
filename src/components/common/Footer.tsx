export default function Footer() {
  return (
    <footer className="bg-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2024 김개발자. All rights reserved.</p>
          <div className="flex space-x-6">
            <a 
              href="https://readdy.ai/?origin=logo" 
              className="text-gray-500 hover:text-purple-600 hover:scale-110 transform transition-all duration-300 cursor-pointer text-sm"
            >
              Made with Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
