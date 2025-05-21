
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold tracking-tight mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: May 21, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p>
                ChainMatch.AI uses cookies for several purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Essential cookies</strong>: Necessary for the website to function properly, allowing you to navigate and use key features.
                </li>
                <li>
                  <strong>Functional cookies</strong>: Enable enhanced functionality and personalization, such as remembering your preferences.
                </li>
                <li>
                  <strong>Performance cookies</strong>: Collect information about how users interact with our website, helping us improve its operation.
                </li>
                <li>
                  <strong>Targeting/advertising cookies</strong>: Used to deliver relevant content and track the effectiveness of our marketing efforts.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">3.1 Essential Cookies</h3>
                <table className="min-w-full border border-blockchain-100">
                  <thead className="bg-blockchain-50">
                    <tr>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blockchain-100 px-4 py-2">session</td>
                      <td className="border border-blockchain-100 px-4 py-2">Maintains your session state</td>
                      <td className="border border-blockchain-100 px-4 py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-blockchain-100 px-4 py-2">auth_token</td>
                      <td className="border border-blockchain-100 px-4 py-2">Authenticates your user account</td>
                      <td className="border border-blockchain-100 px-4 py-2">30 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">3.2 Functional Cookies</h3>
                <table className="min-w-full border border-blockchain-100">
                  <thead className="bg-blockchain-50">
                    <tr>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blockchain-100 px-4 py-2">preferences</td>
                      <td className="border border-blockchain-100 px-4 py-2">Remembers your site preferences</td>
                      <td className="border border-blockchain-100 px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-blockchain-100 px-4 py-2">language</td>
                      <td className="border border-blockchain-100 px-4 py-2">Remembers your language preference</td>
                      <td className="border border-blockchain-100 px-4 py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">3.3 Performance Cookies</h3>
                <table className="min-w-full border border-blockchain-100">
                  <thead className="bg-blockchain-50">
                    <tr>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-blockchain-100 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blockchain-100 px-4 py-2">_ga</td>
                      <td className="border border-blockchain-100 px-4 py-2">Google Analytics - Distinguishes users</td>
                      <td className="border border-blockchain-100 px-4 py-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-blockchain-100 px-4 py-2">_gid</td>
                      <td className="border border-blockchain-100 px-4 py-2">Google Analytics - Identifies user session</td>
                      <td className="border border-blockchain-100 px-4 py-2">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can generally:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>View the cookies stored on your device</li>
                <li>Delete individual or all cookies</li>
                <li>Block or allow cookies from specific websites</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
                <li>Delete cookies when you close your browser</li>
              </ul>
              <p>
                Please note that blocking some types of cookies may impact your experience on our website and the services we are able to offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Consent</h2>
              <p>
                When you first visit our website, we will ask for your consent to use cookies. You can choose to accept all cookies or customize 
                your preferences. You can change your preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page 
                and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at <a href="mailto:privacy@chainmatch.ai" className="text-blockchain-500 hover:underline">privacy@chainmatch.ai</a>.
              </p>
            </section>
          </div>
          
          <div className="mt-10 border-t border-blockchain-100 pt-6">
            <p className="text-sm text-muted-foreground">
              By using ChainMatch.AI, you acknowledge that you have read and understood this Cookie Policy and agree to its terms.
            </p>
            <div className="mt-4">
              <Link to="/terms" className="text-blockchain-500 hover:underline text-sm mr-4">Terms of Service</Link>
              <Link to="/privacy" className="text-blockchain-500 hover:underline text-sm">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
