import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Foote() {
  return (
    <Footer container className="bg-red-200">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Image
            src="/assets/images/logo.png"
            alt="renta cars logo"
            width={120}
            height={120}
          />
          <FooterLinkGroup className="mt-3 flex gap-3">
            <FooterLink href="https://github.com/youseftrek">
              <FaGithubSquare size={20} />
            </FooterLink>
            <FooterLink href="https://linkedin.com/in/yousef-tarek-274ab524a">
              <FaLinkedin size={20} />
            </FooterLink>
            <FooterLink href="https://www.facebook.com/profile.php?id=100009013023074">
              <FaFacebookSquare size={20} />
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className="my-2" />
        <FooterCopyright
          href="https://linkedin.com/in/yousef-tarek-274ab524a"
          by=" Youssef Tarek"
          year={2024}
        />
      </div>
    </Footer>
  );
}
