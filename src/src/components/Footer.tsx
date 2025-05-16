import type { ReactElement } from "react";
import salesforceLogo from "../assets/images/salesforce-logo.svg";
import quadstarLogo from "../assets/images/quadstar-logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const Footer = (): ReactElement => {
  return (
    <footer className="text-white text-sm">
      {/* Main footer content */}
      <div className="bg-black w-full px-4 pt-12 pb-4">
        <div className="flex flex-col items-center mb-8">
          {/* Centered Quadstar logo */}
          <img src={quadstarLogo} alt="Quadstar Logo" className="h-12 mb-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 max-w-[1200px] mx-auto">
          {/* Subscribe */}
          <div>
            <div className="font-bold mb-2 text-[#278D90]">SUBSCRIBE</div>
            <div className="mb-2 text-xs">
              Monthly Wireless Updates
              <br />
              SMB Newsletter
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-[#278D90]">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#278D90]">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#278D90]">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#278D90]">
                <FaYoutube />
              </a>
              <a href="#" aria-label="App" className="hover:text-[#278D90]">
                <MdPhoneIphone />
              </a>
            </div>
          </div>
          {/* Shop by Category */}
          <div className="border-l-1 pl-4">
            <div className="font-bold mb-2 text-[#278D90]">SHOP BY CATEGORY</div>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Only on Quadstar
                </a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <div className="font-bold mb-2 text-[#278D90]">RESOURCES</div>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  My Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Add Services
                </a>
              </li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <div className="font-bold mb-2 text-[#278D90]">CUSTOMER SERVICE</div>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Repair Tickets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Outages
                </a>
              </li>
            </ul>
          </div>
          {/* About */}
          <div>
            <div className="font-bold mb-2 text-[#278D90]">ABOUT</div>
            <ul className="space-y-1 text-xs">
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#278D90]">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom legal bar */}
      <div className="bg-[#231f20] py-2">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4">
          <div className="flex items-center">
            <span className="mr-2">Built on</span>
            <img src={salesforceLogo} alt="Salesforce Logo" className="h-6 w-auto" />
          </div>
          <div className="max-w-[70%]">
            <div className="text-xs mb-1">
              © Copyright 2025 Salesforce.com, inc. | Quadstar is not a real company. It is used for Salesforce demos.
              No orders will be processed.
            </div>
            <div className="flex flex-wrap gap-4 text-[0.75rem]">
              <a href="https://www.salesforce.com/company/legal/" className="text-[#278D90] no-underline">
                Legal
              </a>
              <a
                href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/"
                className="text-[#278D90] no-underline"
              >
                Terms Of Service
              </a>
              <a href="https://www.salesforce.com/company/privacy/" className="text-[#278D90] no-underline">
                Privacy Information
              </a>
              <a href="https://www.salesforce.com/company/disclosure/" className="text-[#278D90] no-underline">
                Responsible Disclosure
              </a>
              <a href="https://trust.salesforce.com/en/" className="text-[#278D90] no-underline">
                Trust
              </a>
              <a href="https://www.salesforce.com/company/contact-us/" className="text-[#278D90] no-underline">
                Contact
              </a>
              <a href="https://www.quadstarcomms.com/default/home#" className="text-[#278D90] no-underline">
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
