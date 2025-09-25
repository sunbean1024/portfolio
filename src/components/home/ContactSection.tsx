export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">연락처</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="mailto:sunbeen1024@gmail.com" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:scale-110 transform transition-all duration-300 cursor-pointer animate-slide-in-up" style={{animationDelay: '0.4s'}}>
            <i className="ri-mail-line text-xl"></i>
            <span>sunbeen1024@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
