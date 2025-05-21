
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: May 21, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p>
                Welcome to ChainMatch.AI. These Terms of Service govern your access to and use of the ChainMatch.AI platform, 
                including any mobile applications and related services (collectively, the "Service").
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
                then you may not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Platform Description</h2>
              <p>
                ChainMatch.AI is a platform that facilitates partnerships between blockchain projects through AI-powered matching, 
                smart contract agreements, and tokenized incentives.
              </p>
              <p>
                We provide tools to help blockchain projects find compatible partners, create on-chain agreements, and establish 
                revenue-sharing mechanisms. ChainMatch.AI is not a party to any agreements between users and does not guarantee outcomes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p>
                To use certain features of the Service, you must create an account. You are responsible for maintaining the security 
                of your account credentials and for all activities that occur under your account.
              </p>
              <p>
                You must provide accurate and complete information when creating your account. You may not use false identities or 
                impersonate any other person or entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Smart Contracts and On-Chain Agreements</h2>
              <p>
                The Service provides templates for smart contracts and on-chain agreements. You are responsible for reviewing and 
                understanding these agreements before entering into them.
              </p>
              <p>
                Once deployed, smart contracts are immutable and operate according to their code. ChainMatch.AI is not responsible 
                for the performance or outcomes of any smart contracts created through our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Tokenized Incentives</h2>
              <p>
                The Service may include a tokenized incentive system. These tokens are utility tokens that grant access to certain 
                features of the platform and are not intended as investments.
              </p>
              <p>
                The acquisition, transfer, and use of these tokens are subject to applicable laws and regulations in your jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Privacy</h2>
              <p>
                Our Privacy Policy explains how we collect, use, and disclose information about you. By using the Service, 
                you agree to our collection, use, and disclosure of information as described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, ChainMatch.AI and its affiliates shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including lost profits, arising out of or in connection with 
                these Terms or the use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. If we make changes, we will provide notice through the Service. Your continued 
                use of the Service after such notice constitutes your acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:legal@chainmatch.ai" className="text-blockchain-500 hover:underline">legal@chainmatch.ai</a>.
              </p>
            </section>
          </div>
          
          <div className="mt-10 border-t border-blockchain-100 pt-6">
            <p className="text-sm text-muted-foreground">
              By using ChainMatch.AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <div className="mt-4">
              <Link to="/privacy" className="text-blockchain-500 hover:underline text-sm mr-4">Privacy Policy</Link>
              <Link to="/cookies" className="text-blockchain-500 hover:underline text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
