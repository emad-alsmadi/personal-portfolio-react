import "./sliders.css";
import { NavLink } from "react-router-dom";
import bg from '../assets/image.png'
import btnImg from '../assets/hireme.png'
const Sliders = ()=>{

    return(
        <section className="section-home container">
            <div className="section-contant">
                <span>Hello</span>
                <h1>I`m <span className="home-name">Smith</span><br />Websit Designer</h1>
                <p className="home-para">I am a skilled web designer with experience in creating visually appending </p>
                <NavLink><button className="btn1"><img src={btnImg} alt="hire me" />Hire me</button></NavLink>
            </div>
            <img src={bg} alt="profile" className="bg-img"/>
        </section>
    );   
}
export default Sliders;