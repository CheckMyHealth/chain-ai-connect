
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Zap, CheckCircle, Key, FileText, DollarSign, Users, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-blockchain-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                How <span className="bg-gradient-to-r from-blockchain-500 to-blockchain-700 bg-clip-text text-transparent">ChainMatch.AI</span> Works
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Our platform uses advanced AI matching technology to connect blockchain projects with ideal partners. Explore the full partnership process below.
              </p>
            </div>
            
            <div className="relative mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold">Our Partnership Process</h2>
                <p className="text-muted-foreground">
                  ChainMatch.AI provides a complete end-to-end process for finding, establishing, and growing blockchain partnerships. Each step is designed to maximize compatibility and long-term success.
                </p>
                
                <div className="mt-12 space-y-20">
                  {/* Step 1 */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-blockchain-100 rounded-full w-16 h-16 flex items-center justify-center">
                          <span className="text-blockchain-500 font-display text-2xl font-bold">01</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3 flex items-center">
                          <span>Profile Creation</span>
                          <CheckCircle className="ml-2 h-5 w-5 text-blockchain-500" />
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Create a detailed profile of your blockchain project including technology stack, goals, target market, and specific partnership needs. The more detailed your profile, the more accurate our AI matching will be.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Project details & tech specifications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Partnership goals & requirements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Resource sharing preferences</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Step 2 */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-blockchain-100 rounded-full w-16 h-16 flex items-center justify-center">
                          <span className="text-blockchain-500 font-display text-2xl font-bold">02</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3 flex items-center">
                          <span>AI-Powered Matching</span>
                          <Zap className="ml-2 h-5 w-5 text-blockchain-500" />
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Our advanced AI algorithms analyze your project's profile against our database of blockchain projects to find the most compatible partnerships based on multiple factors including tech compatibility, goals alignment, and complementary resources.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Multi-factor compatibility analysis</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Prioritized match recommendations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Detailed compatibility reports</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Step 3 */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-blockchain-100 rounded-full w-16 h-16 flex items-center justify-center">
                          <span className="text-blockchain-500 font-display text-2xl font-bold">03</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3 flex items-center">
                          <span>Secure Partnership Agreements</span>
                          <Key className="ml-2 h-5 w-5 text-blockchain-500" />
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Use our library of customizable smart contract templates to create secure, transparent partnership agreements tailored to your specific needs and requirements.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Customizable agreement templates</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>On-chain verification & enforcement</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Milestone-based term structuring</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Step 4 */}
                  <motion.div 
                    className="relative" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-blockchain-100 rounded-full w-16 h-16 flex items-center justify-center">
                          <span className="text-blockchain-500 font-display text-2xl font-bold">04</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3 flex items-center">
                          <span>Setup Revenue-Sharing Models</span>
                          <DollarSign className="ml-2 h-5 w-5 text-blockchain-500" />
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Configure automated revenue-sharing mechanisms that distribute earnings based on pre-defined parameters. Our smart contracts handle the distribution automatically when revenue thresholds are met.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Multi-party distribution models</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Threshold-triggered payments</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blockchain-100 text-blockchain-500 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                            <span>Transparent payment tracking</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right side illustrations */}
              <div className="relative">
                <div className="sticky top-10">
                  {/* Step 1 Animation */}
                  <motion.div 
                    className="hidden lg:block absolute top-0 right-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-blockchain-100 max-w-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-14 w-14 rounded-full bg-blockchain-100 flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-blockchain-500" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Project Profile</h4>
                          <div className="text-xs text-blockchain-500 bg-blockchain-50 px-2 py-1 rounded-full inline-block">
                            Complete: 100%
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 bg-blockchain-100 rounded-full w-full">
                          <div className="h-3 bg-blockchain-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-8 bg-blockchain-50 rounded border border-blockchain-100"></div>
                          <div className="h-8 bg-blockchain-50 rounded border border-blockchain-100"></div>
                        </div>
                        <div className="h-20 bg-blockchain-50 rounded border border-blockchain-100"></div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-8 bg-blockchain-50 rounded border border-blockchain-100"></div>
                          <div className="h-8 bg-blockchain-50 rounded border border-blockchain-100"></div>
                          <div className="h-8 bg-blockchain-50 rounded border border-blockchain-100"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 2 Animation */}
                  <motion.div 
                    className="hidden lg:block absolute top-[380px] right-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-blockchain-100 max-w-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold">AI Matching Results</h4>
                        <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-blockchain-500" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blockchain-50 border-2 border-blockchain-200"></div>
                            <div>
                              <div className="font-semibold">Protocol X</div>
                              <div className="text-xs text-muted-foreground">Layer 1 Blockchain</div>
                            </div>
                          </div>
                          <div className="text-blockchain-500 font-bold">98% Match</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blockchain-50 border-2 border-blockchain-200"></div>
                            <div>
                              <div className="font-semibold">DeFi Project Y</div>
                              <div className="text-xs text-muted-foreground">Lending Protocol</div>
                            </div>
                          </div>
                          <div className="text-blockchain-500 font-bold">92% Match</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blockchain-50 border-2 border-blockchain-200"></div>
                            <div>
                              <div className="font-semibold">NFT Platform Z</div>
                              <div className="text-xs text-muted-foreground">Digital Collectibles</div>
                            </div>
                          </div>
                          <div className="text-blockchain-500 font-bold">87% Match</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3 Animation */}
                  <motion.div 
                    className="hidden lg:block absolute top-[760px] right-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-blockchain-100 max-w-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-14 w-14 rounded-full bg-blockchain-100 flex items-center justify-center">
                          <FileText className="h-8 w-8 text-blockchain-500" />
                        </div>
                        <div>
                          <h4 className="font-bold">Smart Contract Agreement</h4>
                          <div className="text-xs text-blockchain-500">Finalizing Terms</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-blockchain-50 rounded-md w-full mb-1"></div>
                        <div className="h-4 bg-blockchain-50 rounded-md w-full mb-1"></div>
                        <div className="h-4 bg-blockchain-50 rounded-md w-3/4"></div>
                        
                        <div className="h-4 bg-blockchain-50 rounded-md w-full mt-4 mb-1"></div>
                        <div className="h-4 bg-blockchain-50 rounded-md w-5/6"></div>
                        
                        <div className="h-10 bg-blockchain-100 rounded-md w-full mt-4 flex items-center justify-center">
                          <div className="text-sm font-medium text-blockchain-600">Sign Agreement</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 4 Animation - Improved Alignment */}
                  <motion.div 
                    className="hidden lg:block absolute top-[1140px] right-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-blockchain-100 max-w-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="font-bold">Revenue Split Model</h4>
                        <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-blockchain-500" />
                        </div>
                      </div>
                      
                      {/* Improved Revenue Split Visualization */}
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <div className="text-sm font-medium">Your Project</div>
                            <div className="text-sm font-medium">60%</div>
                          </div>
                          <div className="h-4 bg-blockchain-100 rounded-full w-full">
                            <div className="h-4 bg-blockchain-500 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <div className="text-sm font-medium">Partner A</div>
                            <div className="text-sm font-medium">25%</div>
                          </div>
                          <div className="h-4 bg-blockchain-100 rounded-full w-full">
                            <div className="h-4 bg-blockchain-600 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <div className="text-sm font-medium">Partner B</div>
                            <div className="text-sm font-medium">15%</div>
                          </div>
                          <div className="h-4 bg-blockchain-100 rounded-full w-full">
                            <div className="h-4 bg-blockchain-700 rounded-full" style={{ width: "15%" }}></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between border-t pt-4 border-blockchain-100">
                          <div className="text-sm font-medium">Total Revenue</div>
                          <div className="text-blockchain-500 font-bold">$125,000</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Next Blockchain Partner?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started today to find compatible blockchain projects aligned with your vision and goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/post-project">
                <Button className="bg-blockchain-500 hover:bg-blockchain-600 text-white font-medium px-8 py-6 text-lg h-auto">
                  Post Your Project
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" className="px-8 py-6 text-lg h-auto">
                  Explore Partnerships
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
