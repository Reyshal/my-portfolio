import SectionItem from "./SectionItem";
import SkillListItem from "./SkillListItem";

function SkillList() {
  const skills = [
    "Laravel",
    "CodeIgniter",
    "Golang",
    "React",
    "NextJS",
    "TailwindCSS",
  ];

  const renderedSkills = skills.map((skill) => {
    return <SkillListItem key={skill} skill={skill} />;
  });

  return (
    <SectionItem title="Skills">
      <div className="flex flex-wrap gap-2">{renderedSkills}</div>
    </SectionItem>
  );
}

export default SkillList;
