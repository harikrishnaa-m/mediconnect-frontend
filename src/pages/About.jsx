import {
  FaHeartbeat,
  FaUsers,
  FaBullseye,
  FaAward,
  FaHandHoldingHeart,
  FaUserMd,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">MediConnect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting patients with healthcare professionals through
              innovative technology and compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Founded with a vision to revolutionize healthcare
                  accessibility, MediConnect emerged from the need to bridge the
                  gap between patients and quality medical care. We believe that
                  everyone deserves timely access to healthcare professionals.
                </p>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Our platform combines cutting-edge technology with a
                  patient-first approach, making healthcare appointments
                  seamless, transparent, and efficient for both patients and
                  doctors.
                </p>

                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <FaHeartbeat className="w-8 h-8 text-blue-600 shrink-0" />
                  <p className="text-gray-700 font-medium">
                    "Making healthcare accessible, one connection at a time."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <FaBullseye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To democratize healthcare by providing a platform that
                  connects patients with trusted medical professionals
                  instantly, ensuring quality care is just a click away.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <FaUsers className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A world where geographical and logistical barriers no longer
                  prevent anyone from accessing the medical care they need, when
                  they need it.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <FaHandHoldingHeart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Our Values
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Compassion, innovation, trust, and accessibility guide every
                  decision we make and every feature we build for our community.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  50,000+
                </h3>
                <p className="text-gray-600">Patients Served</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserMd className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
                <p className="text-gray-600">Expert Doctors</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">98%</h3>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeartbeat className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
                <p className="text-gray-600">Service Available</p>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are committed to continuously improving our platform to ensure
              that every patient receives the care they deserve and every doctor
              can focus on what they do best - healing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
