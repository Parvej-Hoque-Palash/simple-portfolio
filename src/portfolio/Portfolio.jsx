import myPhoto from "./php.jpg";
import intuition75 from "./75p.jpg";
import create82 from "./82.jpg";
import './Portfolio.css';


function Portfolio(){
    return(
        <div className="Portfolio">
        <div className="nav__bar">
          <div className="my__cv">Palash.CV</div>
          <div className="nav__buttons">
            <div className='About' type="submit">About</div>
            <div className='Skills' type="submit">Skills</div>
            <div className='Services' type="submit">Services</div>
            <div className='Experience' type="submit">Experience</div>
            <div className='Education' type="submit">Education</div>
            <div className='Portfolios' type="submit">Portfolio</div>
            <div className='Testimonials' type="submit">Testimonials</div>
            <div className='Contact' type="submit">Contact</div>
          </div>
        </div>
        <div className="detail__bar">
            <div className="left__side">
                <div className='general__info'>
                    <img className="my__photo" src={myPhoto} alt="pic" />
                    <h3>General Information</h3>
                    <div className='my__name'>Name: Md. Parvej Hoque Palash</div>
                    <div className='my__location'>Location: Dhaka, Bangladesh. </div>
                    <div className='dateOfBirth'>Date of Birth: 22 March, 2001</div>
                </div>
            </div>
            <div className="right__side">
                <h2 className="my__designation">Front-End Web Developer</h2>
                <h1>Md. Parvej Hoque Palash</h1>
                <h3>Description</h3>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis ullam autem amet sed voluptatibus sequi rem ex nesciunt odit suscipit quod hic deserunt, quae commodi laborum obcaecati repellat dolor eligendi tenetur perferendis. Quam sed veritatis exercitationem aut atque doloremque dolores dignissimos et. Molestias cumque ex quae quasi? Nam veritatis hic illo, voluptatum voluptates aut consequatur quaerat fuga obcaecati. Quis quod laborum quisquam, nulla animi labore fuga pariatur tenetur voluptates consequatur explicabo sint corrupti, porro deserunt, exercitationem officiis voluptate laboriosam eligendi. Aliquam magni sequi nobis, amet sint, expedita, sed facilis aperiam dolorum voluptatibus cupiditate enim saepe? Sequi assumenda accusamus exercitationem!</div>
                <div className="skill__percentage">
                <div>
                    <img className="intuition__photo" src={intuition75} alt="75 percent" />
                    <h4>INTUITION</h4>
                </div>
                <div>
                    <img className="creativity__photo" src={create82} alt="82 percent" />
                    <h4>CREATIVITY</h4>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
}
export default Portfolio;