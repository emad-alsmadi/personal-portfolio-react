import './skills.css';
import UIDesign from '../assets/ui-design.png';
import WebDesign from '../assets/website-design.png';
import AppDesign from '../assets/app-design.png';
const Skills = ()=>{

    return(
        <section className="section-skills">
            <h1>What I do</h1>
            <p className='para-skill'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites t have a strong understanding of design and a keen eye for detail om proficient in HTML, CSS and Javasenpt, as well as design software such as Adobe Photoshop and illustrator.</p>
            <div className="skills">
                <div className="skill">
                    <img src={UIDesign} alt="UI/UX design" />
                    <div>
                        <h2>UI/UX design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skill">
                    <img src={WebDesign} alt="Website design" />
                    <div>
                        <h2>Website design</h2>
                        <p>This demo text can be changed while making the production ready site.</p>
                    </div>
                </div>
                <div className="skill">
                    <img src={AppDesign} alt="App design" />
                    <div>
                        <h2>App design</h2>
                        <p>You can write test related to mobile opp development.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;













