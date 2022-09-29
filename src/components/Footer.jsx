import Twitter from "../assets/Twitter.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Linkedin from "../assets/Linkedin.svg";
import Github from "../assets/Github.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <img src={Twitter} alt=""></img>
        <img src={Facebook} alt=""></img>
        <img src={Instagram} alt=""></img>
        <img src={Linkedin} alt=""></img>
        <img src={Github} alt=""></img>
      </footer>
    </>
  );
}

export default Footer;
