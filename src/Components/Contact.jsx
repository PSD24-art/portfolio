export default function ContactMe() {
  return (
    <section
      id="contactMe"
      className="relative min-h-[calc(dvh-60px)] flex items-center justify-center px-6 py-16 bg-black/40"
    >
      <div className="w-full max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Have a project in mind or just want to say hi? Feel free to drop me a
          message.
        </p>

        {/* Form */}
        <form className="bg-[#111] rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-xl text-white font-semibold transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
