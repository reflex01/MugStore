import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";

const CookiePolicy = () => {
  const lastUpdated = "June 13, 2025"; // Dynamically set or update as needed

  return (
    <>
      <Breadcrumb title={"Cookie Policy"} pages={["cookie-policy"]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-light-5 via-white to-green-light-6">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-light-5 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z" />
              </svg>
              Your Privacy Matters
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-green">Cookie Policy</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              At AllKeysSale, we use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. This policy explains how we use cookies and how you can manage them.
            </p>

            <div className="inline-flex items-center gap-2 bg-gray-1 px-4 py-2 rounded-lg text-sm text-gray-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-gray-1 rounded-2xl shadow-2 p-8 lg:p-12">
            
            {/* Table of Contents (Optional, can be added if policy is very long) */}
            {/* <div className="bg-blue-light-6 rounded-xl p-6 mb-12"> ... </div> */}

            <div className="prose prose-lg max-w-none">
              {/* 1. What are Cookies? */}
              <section id="what-are-cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  What are Cookies?
                </h2>
                <div className="bg-blue-light-5 rounded-lg p-6 mb-6">
                  <p className="text-gray-6">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies help us to recognize your device and remember information about your visit, like your preferences, settings, and how you use our website.
                  </p>
                </div>
                <div className="space-y-4 text-gray-6">
                  <p>Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.</p>
                  <p>We use both session and persistent cookies for the purposes set out below.</p>
                </div>
              </section>

              {/* 2. How We Use Cookies */}
              <section id="how-we-use-cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  How We Use Cookies
                </h2>
                <div className="bg-green-light-6 rounded-lg p-6 mb-6">
                  <p className="text-gray-6">
                    We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not, in case they are used to provide a service that you use.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-green pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Types of Cookies We Use:</h4>
                    <ul className="list-disc list-inside text-gray-6 space-y-3 ml-4">
                      <li>
                        <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
                      </li>
                      <li>
                        <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
                      </li>
                      <li>
                        <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly. For example, these cookies can remember your language preferences or region.
                      </li>
                      <li>
                        <strong>Targeting or Advertising Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. Third-Party Cookies */}
              <section id="third-party-cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  Third-Party Cookies
                </h2>
                <div className="bg-yellow-light-4 rounded-lg p-6 mb-6">
                  <p className="text-gray-6">
                    In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site.
                  </p>
                </div>
                <div className="space-y-4 text-gray-6">
                  <p>
                    This site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.
                  </p>
                  <p>
                    We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work, social media sites including Facebook, Twitter, Instagram, etc., will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                  </p>
                   <p>
                    We may use cookies from payment processors like Stripe or PayPal to facilitate secure transactions and prevent fraud. These cookies are essential for the checkout process.
                  </p>
                </div>
              </section>

              {/* 4. Your Choices Regarding Cookies */}
              <section id="your-choices" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                  Your Choices Regarding Cookies
                </h2>
                <div className="bg-red-light-6 rounded-lg p-6 mb-6">
                  <p className="text-gray-6">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-red pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Managing Cookies:</h4>
                    <p className="text-gray-6 mb-3">
                      Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <Link href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">www.allaboutcookies.org</Link> or <Link href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">www.aboutcookies.org</Link>.
                    </p>
                    <p className="text-gray-6">
                      To opt out of being tracked by Google Analytics across all websites, visit <Link href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">http://tools.google.com/dlpage/gaoptout</Link>.
                    </p>
                    <p className="text-gray-6 mt-2">
                      Please note that disabling cookies may affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
                    </p>
                  </div>
                  <div className="bg-blue-light-5 rounded-lg p-6">
                     <h4 className="text-lg font-semibold text-dark mb-3">Cookie Consent Tool:</h4>
                     <p className="text-gray-6">
                       Upon your first visit to our website, you may see a banner or pop-up requesting your consent to use non-essential cookies. You can manage your preferences through this tool at any time.
                     </p>
                  </div>
                </div>
              </section>

              {/* 5. Changes to This Cookie Policy */}
              <section id="changes-to-policy" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">5</span>
                  Changes to This Cookie Policy
                </h2>
                <div className="bg-blue-light-5 rounded-lg p-6">
                  <p className="text-gray-6">
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                  <p className="text-gray-6 mt-3">
                    The date at the top of this Cookie Policy indicates when it was last updated.
                  </p>
                </div>
              </section>

              {/* 6. Contact Us */}
              <section id="contact-us" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">6</span>
                  Contact Us
                </h2>
                <div className="bg-green-light-6 rounded-lg p-6">
                  <p className="text-gray-6">
                    If you have any questions about our use of cookies or other technologies, please email us at:
                    <Link href="mailto:privacy@allkeyssale.com" className="text-blue hover:underline ml-1">
                      privacy@allkeyssale.com
                    </Link>
                  </p>
                  <p className="text-gray-6 mt-3">
                    You can also contact us via our <Link href="/contact" className="text-blue hover:underline">Contact Page</Link>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue to-green">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Manage Your Preferences
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              You can update your cookie settings at any time through your browser or our consent management tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/privacy-policy" className="inline-flex items-center justify-center gap-2 bg-white text-blue px-8 py-4 rounded-lg font-medium hover:bg-gray-1 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                View Privacy Policy
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
