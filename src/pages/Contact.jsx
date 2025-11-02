import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <section className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
          <p className="text-gray-600">Get in touch with our team</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <FaPhone className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-gray-800">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
            <FaEnvelope className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">support@mediconnect.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
            <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium text-gray-800">123 Healthcare St, Medical City</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MediConnect. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;