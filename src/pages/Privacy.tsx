
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: May 21, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                ChainMatch.AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our platform.
              </p>
              <p>
                By accessing or using the Service, you consent to the practices described in this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our Service, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Personal information</strong>: Information that can be used to identify you, such as your name, email address, 
                  and blockchain wallet addresses.
                </li>
                <li>
                  <strong>Transaction information</strong>: Information about your projects, partnerships, and blockchain transactions 
                  made through our platform.
                </li>
                <li>
                  <strong>Technical information</strong>: Information about your browser, IP address, and device.
                </li>
                <li>
                  <strong>Usage information</strong>: Information about how you use our Service.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Match you with potential blockchain partners using our AI algorithms</li>
                <li>Process transactions and agreements</li>
                <li>Communicate with you about your account and our Service</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Blockchain Transparency</h2>
              <p>
                As a blockchain-based platform, certain information is inherently transparent and public. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Wallet addresses associated with your account</li>
                <li>Smart contract interactions</li>
                <li>On-chain transaction details</li>
              </ul>
              <p>
                Please be aware that any information you choose to make public on the blockchain cannot be made private later.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Sharing of Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Other users as part of the partnership matching process</li>
                <li>Service providers who perform services on our behalf</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners in connection with offers or services we provide together</li>
              </ul>
              <p>
                We will not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:privacy@chainmatch.ai" className="text-blockchain-500 hover:underline">privacy@chainmatch.ai</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over 
                the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@chainmatch.ai" className="text-blockchain-500 hover:underline">privacy@chainmatch.ai</a>.
              </p>
            </section>
          </div>
          
          <div className="mt-10 border-t border-blockchain-100 pt-6">
            <p className="text-sm text-muted-foreground">
              By using ChainMatch.AI, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
            <div className="mt-4">
              <Link to="/terms" className="text-blockchain-500 hover:underline text-sm mr-4">Terms of Service</Link>
              <Link to="/cookies" className="text-blockchain-500 hover:underline text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
