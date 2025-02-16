import AboutMe from "./components/AboutMe";
import Avatar from "./components/Avatar";
import SocialLinks from "./components/SocialLinks";
import ProjectsList from "./components/ProjectsList";
import SkillList from "./components/SkillList";
import WorkExperienceList from "./components/WorkExperienceList";

function App() {
  return (
    <div className="flex flex-col max-w-lg mx-auto pt-9 px-5">
      <SocialLinks />
      <Avatar />
      <AboutMe />
      <SkillList />
      <ProjectsList />
      <WorkExperienceList />
    </div>
  );
}

export default App;
