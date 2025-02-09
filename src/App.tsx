import AboutMe from "./components/AboutMe";
import Avatar from "./components/Avatar";
import NavBar from "./components/NavBar";
import ProjectsList from "./components/ProjectsList";
import SkillList from "./components/SkillList";
import WorkExperienceList from "./components/WorkExperienceList";

function App() {
  return (
    <div className="flex flex-col max-w-lg mx-auto pt-9 px-5">
      <NavBar />
      <Avatar />
      <AboutMe />
      <SkillList />
      <ProjectsList />
      <WorkExperienceList />
    </div>
  );
}

export default App;
