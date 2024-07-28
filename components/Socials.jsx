import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram, FaKaggle } from "react-icons/fa"

const socials = [
  { icon: <FaGithub/>, path: "https://github.com/Jh-Terencio"},
  { icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/jo%C3%A3o-ter%C3%AAncio-36295722b/"},
  { icon: <FaInstagram/>, path: "https://www.instagram.com/jhterencio/"},
  { icon: <FaKaggle/>, path: "https://www.kaggle.com/jooterncio"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return <Link key={index} href={item.path} className={iconStyles}> {item.icon} </Link>
    })}
  </div>
}

export default Socials