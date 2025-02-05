import Image from 'next/image';

export const Contact = () => {
  return (
    <section className="py-12 bg-gray-200" id="contactUs">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a876]"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a876]"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a876]"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#c8a876] text-white py-2 px-4 rounded-md hover:bg-[#b89765] transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

           
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Netgear Solutions</h3>
              
              <div className="flex items-center space-x-3">
                 <h1>Address</h1>
                <p className="text-gray-600">
                   Meera Road<br/>
                   Unknown Place<br/>
                  SomeWhere on the Earth
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <h1>Mobile No</h1>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <h1>Email</h1>
                <p className="text-gray-600">contact@netgearsolutions.com</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-lg font-medium mb-4">Business Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 9 AM - 6 PM PST<br/>
                Saturday: 10 AM - 4 PM PST<br/>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
