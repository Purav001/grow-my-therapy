import { MapPin, Video, Clock } from 'lucide-react';

interface OfficeProps {
  version: 'clone' | 'redesign';
}

export default function Office({ version }: OfficeProps) {
  if (version === 'clone') {
    return (
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl text-[#2F4156] mb-8">Office Location</h2>

          <div className="mb-8">
            <p className="text-lg text-[#567C8D] mb-4">
              <strong className="text-[#2F4156]">Address:</strong> 123th Street 45 W, Santa Monica, CA 90401
            </p>
            <p className="text-lg text-[#567C8D]">
              I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for
              clients located in California. My office is a quiet, private space designed to feel calm and
              grounding, with natural light and a comfortable, uncluttered environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden bg-[#F5EFE6] min-h-80 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Therapy office interior"
                className="w-full h-auto max-h-80 object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden bg-[#F5EFE6] min-h-80 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Therapy office waiting area"
                className="w-full h-auto max-h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-[#2F4156] mb-6">
            Visit My Practice
          </h2>
          <p className="text-xl text-[#567C8D] leading-relaxed">
            A calm, private space designed for healing and growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#F5EFE6] p-8 rounded-2xl space-y-4 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#2F4156] rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F4156]">In-Person Sessions</h3>
            <p className="text-[#567C8D] leading-relaxed">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
          </div>

          <div className="bg-[#F5EFE6] p-8 rounded-2xl space-y-4 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#567C8D] rounded-full flex items-center justify-center mx-auto">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F4156]">Telehealth Available</h3>
            <p className="text-[#567C8D] leading-relaxed">
              Secure video sessions for clients throughout California
            </p>
          </div>

          <div className="bg-[#F5EFE6] p-8 rounded-2xl space-y-4 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#2F4156] rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F4156]">Flexible Scheduling</h3>
            <p className="text-[#567C8D] leading-relaxed">
              Evening and weekend appointments available
            </p>
          </div>
        </div>

        <div className="bg-[#F5EFE6] p-10 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#2F4156]">
                A Space Designed for Comfort
              </h3>
              <p className="text-lg text-[#567C8D] leading-relaxed">
                My Santa Monica office is a quiet, private sanctuary designed to feel calm and grounding.
                With abundant natural light and a comfortable, uncluttered environment, clients often share
                that the space itself helps them feel more at ease the moment they arrive.
              </p>
              <p className="text-lg text-[#567C8D] leading-relaxed">
                Whether you choose in-person sessions or secure telehealth appointments, you'll find a
                welcoming, confidential space focused entirely on your healing and growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-[#F5EFE6] h-80 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Comfortable therapy office"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Peaceful waiting area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
