import type { ReactElement } from "react";
import salesforceLogo from "../assets/images/salesforce-logo.svg";

const Footer = (): ReactElement => {
  return (
    <footer className="bg-[#231f20] py-2 text-white text-sm">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 min-h-12">
        <div className="flex items-center">
          <span className="mr-2">Built on</span>
          <img src={salesforceLogo} alt="Salesforce Logo" className="h-6 w-auto" />
        </div>
        <div className="max-w-[70%]">
          <div className="text-xs mb-1">
            © Copyright 2025 Salesforce.com, inc. | Quadstar is not a real company. It is used for Salesforce demos. No
            orders will be processed.
          </div>
          <div className="flex flex-wrap gap-4 text-[0.75rem]">
            <a href="https://www.salesforce.com/company/legal/" className="text-[#4bb4e6] no-underline">
              Legal
            </a>
            <a
              href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/"
              className="text-[#4bb4e6] no-underline"
            >
              Terms Of Service
            </a>
            <a href="https://www.salesforce.com/company/privacy/" className="text-[#4bb4e6] no-underline">
              Privacy Information
            </a>
            <a href="https://www.salesforce.com/company/disclosure/" className="text-[#4bb4e6] no-underline">
              Responsible Disclosure
            </a>
            <a href="https://trust.salesforce.com/en/" className="text-[#4bb4e6] no-underline">
              Trust
            </a>
            <a href="https://www.salesforce.com/company/contact-us/" className="text-[#4bb4e6] no-underline">
              Contact
            </a>
            <a href="https://www.quadstarcomms.com/default/home#" className="text-[#4bb4e6] no-underline">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
