import "./Hero.css"
import pfp from "../assets/image.png"
import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
function Hero(){
    return(
        <section>
            <div className="hero">
            <div className="hero-title">
                    <h1 className="hero-heading">Hi, I'm <span className="hero-highlight">Kabir</span></h1>
                    <p className="hero-desc">Application Development | Backend | LLMs</p>
                    <p className="hero-text">Passionate about turning real-world problems into elegant solutions through technology and creativity.</p>
                    <div className="hero-buttons">
                        <a href="https://www.linkedin.com/in/kabir-grewal-812463246/"><FaLinkedinIn/></a>
                        <a href="https://github.com/kabirgrewal1313"><FaGithub/></a>
                </div>
                </div>
                <div className="hero-image">
                    <img src={pfp}/>
                </div>
            </div>
        </section>
    )
}
export default Hero