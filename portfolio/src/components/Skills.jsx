import "./Skills.css";
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills">
      <h1 className="SkillsHeading">Skills</h1>

      <div className="SkillsGrid">
        {skills.map((skill) => (
          <div className="SkillCircle" key={skill.id}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
