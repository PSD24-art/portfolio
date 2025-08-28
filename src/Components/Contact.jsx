function ContactMe() {
  return (
    <div className=" text-blue-600">
      <div className="border border-blue-500">Contact Me</div>
      <label className="border border-blue-500" for="Name"></label>
      <input
        className="border border-blue-500"
        type="text"
        placholder="Your Name here.."
      ></input>
      <input
        className="border border-blue-500"
        type="text"
        placholder="Email"
      ></input>
      <input
        class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placholder="Email"
      ></input>
      <input
        type="email"
        placeholder="Enter your email"
        class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}

export default ContactMe;
