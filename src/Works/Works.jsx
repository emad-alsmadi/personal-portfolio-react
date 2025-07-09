import './works.css';
import Protfolio1 from '../assets/portfolio-1.png';
import Protfolio2 from '../assets/portfolio-2.png';
import Protfolio3 from '../assets/portfolio-3.png';
import Protfolio4 from '../assets/portfolio-4.png';
import Protfolio5 from '../assets/portfolio-5.png';
import Protfolio6 from '../assets/portfolio-6.png';

const Works = ()=>{

    return(
        <div className="section-works">
            <h1>My Protfolio</h1>
            <p className='desc-works'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis reprehenderit qui error sit obcaecati corporis facere dolore illum totam deserunt nisi rem tenetur, incidunt eum nihil numquam voluptas atque!</p>
            <div className="imgs-works">
                <img src={Protfolio1} alt="" className="img-works" />
                <img src={Protfolio2} alt="" className="img-works" />
                <img src={Protfolio3} alt="" className="img-works" />
                <img src={Protfolio4} alt="" className="img-works" />
                <img src={Protfolio5} alt="" className="img-works" />
                <img src={Protfolio6} alt="" className="img-works" />
            </div>
            <button className='workBtn'>See More</button>
        </div>
    );
}
export default Works;