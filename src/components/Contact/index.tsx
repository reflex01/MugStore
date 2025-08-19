import React from "react";
import Breadcrumb from "../Common/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb title={"Contact Us"} pages={["contact"]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-light-5 via-white to-green-light-6">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-light-5 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Get In Touch
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-green">MugsStore</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              Have a question about our premium mugs? Need customer support? 
              We&apos;re here to help! Reach out to our expert team and get the assistance you need.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue mb-1">24/7</div>
                <div className="text-sm text-gray-6">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green mb-1">&lt;1hr</div>
                <div className="text-sm text-gray-6">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow mb-1">99%</div>
                <div className="text-sm text-gray-6">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red mb-1">24/7</div>
                <div className="text-sm text-gray-6">Live Chat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Choose your preferred way to get in touch. We&apos;re available through various channels to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Phone Support</h3>
              <p className="text-gray-6 mb-3">Speak directly with our experts</p>
              <p className="font-medium text-blue">+1 (555) 123-4567</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-light-6 to-green-light-5 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Email Support</h3>
              <p className="text-gray-6 mb-3">Send us your detailed inquiries</p>
              <p className="font-medium text-green">support@allkeyssale.com</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-light-4 to-yellow-light-2 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Live Chat</h3>
              <p className="text-gray-6 mb-3">Get instant help from our team</p>
              <button className="font-medium text-yellow-dark hover:text-yellow transition-colors">Start Chat</button>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-light-6 to-red-light-5 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Visit Us</h3>
              <p className="text-gray-6 mb-3">Come to our office</p>
              <p className="font-medium text-red">Las Vegas, NV</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 lg:py-20 bg-gray-1">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-12 lg:gap-16">
            {/* Contact Information Card */}
            <div className="xl:max-w-[400px] w-full">
              <div className="bg-white rounded-2xl shadow-2 p-8 lg:p-10 h-full">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue to-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Contact Information</h3>
                  <p className="text-gray-6">Get in touch with our friendly team</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-light-5 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Phone</h4>
                      <p className="text-gray-6">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-5">Mon-Fri 9am-6pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-light-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Email</h4>
                      <p className="text-gray-6">support@allkeyssale.com</p>
                      <p className="text-sm text-gray-5">We&apos;ll respond within 1 hour</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-light-2 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Address</h4>
                      <p className="text-gray-6">123 Ceramic Avenue<br />Los Angeles, CA 90210<br />United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-light-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Business Hours</h4>
                      <p className="text-gray-6">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p className="text-gray-6">Weekend: 10:00 AM - 4:00 PM PST</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-3">
                  <h4 className="font-semibold text-dark mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-blue-light-5 rounded-full flex items-center justify-center hover:bg-blue-light-4 transition-colors">
                      <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-light-5 rounded-full flex items-center justify-center hover:bg-blue-light-4 transition-colors">
                      <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-light-5 rounded-full flex items-center justify-center hover:bg-blue-light-4 transition-colors">
                      <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-2 p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-3">Send Us a Message</h3>
                  <p className="text-gray-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-dark mb-2">
                        First Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="John"
                        className="w-full px-4 py-3 border border-gray-3 rounded-lg bg-gray-1 placeholder:text-gray-5 focus:border-blue focus:ring-2 focus:ring-blue-light-5 focus:bg-white outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-dark mb-2">
                        Last Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-gray-3 rounded-lg bg-gray-1 placeholder:text-gray-5 focus:border-blue focus:ring-2 focus:ring-blue-light-5 focus:bg-white outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                        Email Address <span className="text-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-3 rounded-lg bg-gray-1 placeholder:text-gray-5 focus:border-blue focus:ring-2 focus:ring-blue-light-5 focus:bg-white outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-3 rounded-lg bg-gray-1 placeholder:text-gray-5 focus:border-blue focus:ring-2 focus:ring-blue-light-5 focus:bg-white outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-dark mb-2">
                      Subject <span className="text-red">*</span>
                    </label>
                    <select
                      name="subject"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-3 rounded-lg bg-gray-1 text-gray-6 focus:border-blue focus:ring-2 focus:ring-blue-light-5 focus:bg-white outline-none transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="license-inquiry">License Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="billing-question">Billing Question</option>
                      <option value="product-information">Product Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                      Message <span className="text-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-gray-3 rounded-lg bg-gray-1 placeholder:text-gray-5 focus:border-blue focus:ring-2 focus:ring-blue-light-5 focus:bg-white outline-none transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 text-blue border-gray-3 rounded focus:ring-blue-light-5"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-6">
                      I&apos;d like to receive updates about new products and offers
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue to-blue-dark text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-dark hover:to-blue transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Quick answers to common questions about our services and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-light-5 to-blue-light-4 p-6 rounded-xl">
              <h4 className="font-bold text-dark mb-3">How quickly do you respond to support requests?</h4>
              <p className="text-gray-6">We typically respond to all support requests within 1 hour during business hours and within 4 hours outside business hours.</p>
            </div>

            <div className="bg-gradient-to-br from-green-light-6 to-green-light-5 p-6 rounded-xl">
              <h4 className="font-bold text-dark mb-3">What information should I include in my support request?</h4>
              <p className="text-gray-6">Please include your order number, product details, and a clear description of the issue you&apos;re experiencing.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-light-4 to-yellow-light-2 p-6 rounded-xl">
              <h4 className="font-bold text-dark mb-3">Do you offer phone support?</h4>
              <p className="text-gray-6">Yes! Our phone support is available Monday through Friday, 9 AM to 6 PM PST. Premium customers get 24/7 priority support.</p>
            </div>

            <div className="bg-gradient-to-br from-red-light-6 to-red-light-5 p-6 rounded-xl">
              <h4 className="font-bold text-dark mb-3">Can I get help with mug care instructions?</h4>
              <p className="text-gray-6">Absolutely! Our technical team can guide you through the installation process and help troubleshoot any issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue to-green">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose AllKeysSale Support?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              We&apos;re committed to providing exceptional customer service that goes above and beyond your expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="opacity-90">Average response time under 1 hour</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="opacity-90">Certified professionals with deep product knowledge</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="opacity-90">99% customer satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
