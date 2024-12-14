import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
export default function ContactUs() {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <PhoneIcon className="w-6 h-6 text-balck mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-900">+91 8374372634</p>
              <p className="text-gray-900">Monday - Friday, 9am to 6pm EST</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MailIcon className="w-6 h-6 text-black mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-900">manavizianagaramjntugv@gmail.com</p>
              <p className="text-gray-900">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPinIcon className="w-6 h-6 text-black mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Office</h3>
              <p className="text-gray-900">JNTUGV College Of Engineering Vizianagaram (A)</p>
              <p className="text-gray-900">Vizianagaram</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
