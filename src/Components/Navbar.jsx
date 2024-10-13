import { FaInstagram, FaLinkedin, FaSquare, FaTwitter } from "react-icons/fa";
import logo from "../assets/sayiamarora (2).png";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="mx-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sayiam-arora27/"
          target="_blank"
          rel="noopener noreferece"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sayiamarora"
          target="_blank"
          rel="noopener noreferece"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/invites/contact/?igsh=tyzzdx1wt06n&utm_content=7v14rdu"
          target="_blank"
          rel="noopener noreferece"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/arora_sayi15610"
          target="_blank"
          rel="noopener noreferece"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
