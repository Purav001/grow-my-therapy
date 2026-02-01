import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  version: 'clone' | 'redesign';
}

export default function Contact({ version }: ContactProps) {
  if (version === 'clone') {
    return (
      <section id="contact" className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl text-[#2F4156] mb-8 text-center">Get In Touch</h2>

          <div className="space-y-6 text-center">
            <p className="text-lg text-[#567C8D]">
              If you're looking for a therapist who combines practical tools with depth-oriented work—and who
              understands the realities of living and working in a fast-paced environment—I may be a good fit.
            </p>

            <div className="space-y-4 pt-8">
              <p className="text-[#2F4156]">
                <strong>Office:</strong> 123th Street 45 W, Santa Monica, CA 90401
              </p>
              <p className="text-[#2F4156]">
                <strong>Email:</strong> contact@drmayareynolds.com
              </p>
              <p className="text-[#2F4156]">
                <strong>Phone:</strong> (310) 555-0123
              </p>
            </div>

            <div className="pt-8">
              <a
                href="mailto:contact@drmayareynolds.com"
                className="inline-block bg-[#2F4156] text-white px-8 py-3 hover:bg-[#567C8D] transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-[#2F4156] mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-[#567C8D] leading-relaxed">
            Taking the first step toward therapy is an act of courage. I'm here to support you on your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#2F4156] to-[#567C8D] p-10 rounded-3xl text-white space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Reach out to schedule a consultation or ask any questions you may have. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:3105550123" className="opacity-90 hover:opacity-100 transition-opacity">
                      (310) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:contact@drmayareynolds.com"
                      className="opacity-90 hover:opacity-100 transition-opacity break-all"
                    >
                      contact@drmayareynolds.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="opacity-90">
                      123th Street 45 W<br />
                      Santa Monica, CA 90401
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5EFE6] p-8 rounded-3xl">
              <h4 className="text-xl font-semibold text-[#2F4156] mb-4">
                What Happens Next?
              </h4>
              <ol className="space-y-3 text-[#567C8D]">
                <li className="flex gap-3">
                  <span className="font-semibold text-[#2F4156]">1.</span>
                  <span>Reach out via phone or email to schedule a consultation</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#2F4156]">2.</span>
                  <span>We'll discuss your needs and see if we're a good fit</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#2F4156]">3.</span>
                  <span>Schedule your first session at a time that works for you</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-[#F5EFE6] p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#2F4156] mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#C8D9E6] focus:border-[#567C8D] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#C8D9E6] focus:border-[#567C8D] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#C8D9E6] focus:border-[#567C8D] focus:outline-none transition-colors"
                  placeholder="(310) 555-0123"
                />
              </div>

              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  How can I help you?
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#C8D9E6] focus:border-[#567C8D] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me a bit about what brings you to therapy..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2F4156] text-white px-8 py-4 rounded-lg hover:bg-[#567C8D] transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-[#567C8D] text-center">
                Your information is confidential and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
