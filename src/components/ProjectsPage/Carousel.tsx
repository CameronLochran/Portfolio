import { Carousel } from "react-bootstrap";
import nodeJsIcon from "../images/node-js_icon.jpeg";
import reactIcon from "../images/reactIcon.png";

const SkillsCarouselBlackjack = () => {
  const skills = [
    {
      skill: "Node.js",
      icon: nodeJsIcon,
      skillName: "Node.js",
    },
    {
      skill: "React",
      icon: reactIcon,
      skillName: "React",
    },
    {
      skill: "Express",
      icon: "",
      skillName: "Express",
    },
    {
      skill: "MongoDB",
      icon: "",
      skillName: "MongoDB",
    },
    {
      skill: "GitHub",
      icon: "",
      skillName: "GitHub",
    },
    {
      skill: "HTML",
      icon: "",
      skillName: "HTML",
    },
    {
      skill: "CSS",
      icon: "",
      skillName: "CSS",
    },
  ];
  return (
    //     <div id="blackjack-carousel-container">
    //         <Carousel autoPlay={false} showIndicators={false} showStatus={false}/>
    //             {skills.map(({ skill, icon, skillName }) => (
    //                 <div id="carousel-image">
    //                     <p>{skill}</p>
    //                     <img src={icon} alt={skillName} />
    //                 </div>

    //     </div>

    // )

    <div className="carousel-container">
      <Carousel>
        {skills.map(({ skill, icon, skillName }) => (
          <div className="country-image">
            <p>{skill}</p>
            <img src={icon} alt={skillName} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SkillsCarouselBlackjack;
