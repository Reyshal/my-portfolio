import SectionItem from "./SectionItem";

function WorkExperienceList() {
  const workExperiences = [
    {
      title: "Full Stack Engineer",
      link: "https://www.linkedin.com/company/beautyhaul/",
      jobType: "Full-time",
      company: "Somethinc - Beautyhaul",
      startDate: "Mar 2023",
      endDate: "Present",
      description:
        "As a Full Stack Engineer, I enhanced and integrated features across high-impact projects, improving functionality and user experience. I resolved bugs and provided proactive maintenance to boost project stability and performance. Additionally, I delivered functional web pages on time, contributing to key project launches.",
    },
    {
      title: "Junior Software Engineer",
      link: "https://www.linkedin.com/company/icubeid/",
      jobType: "Full-time",
      company: "ICUBE",
      startDate: "Sep 2022",
      endDate: "Jan 2023",
      description:
        "As a Junior Software Engineer, I contributed to multiple projects by adding new features that enhanced functionality and user experience. I improved system reliability through bug fixes and maintenance. I developed a robust Laravel project skeleton for a middleware project, streamlining development and onboarding. Additionally, I created efficient GraphQL queries and mutations, built REST APIs and webhooks for seamless system integration, and authored comprehensive documentation for all developed APIs, ensuring maintainability and smooth handoff to other developers.",
    },
    {
      title: "Engineer Trainee",
      link: "https://www.linkedin.com/company/icubeid/",
      jobType: "Internship",
      company: "ICUBE",
      startDate: "Mar 2022",
      endDate: "Sep 2022",
      description:
        "As an Engineer Trainee, I completed training in Magento and ReactJS to enhance my technical skills in preparation for upcoming projects. I contributed to the middleware project by adding new features using Laravel, improving system capabilities and user satisfaction. I also enhanced project stability through bug fixes and maintenance, leading to increased reliability. Additionally, I conducted thorough QA testing for assigned projects, ensuring functionality and quality for a more robust final product.",
    },
    {
      title: "Mobile App Developer",
      link: "https://www.linkedin.com/company/internet-solusi-layanan-informasi-mandiri/",
      jobType: "Part-time",
      company: "Internet Solusi Layanan Informasi Mandiri",
      startDate: "Oct 2021",
      endDate: "Dec 2021",
      description:
        "As a Part-Time Mobile App Developer, I designed wireframes to outline the app’s structure and user interface, guiding the development process. I expanded the foundational app skeleton to establish a robust architecture, facilitating efficient development. I successfully implemented new features using Android Studio and Flutter, enhancing functionality and user experience. Additionally, I proactively addressed and resolved bugs within the Flutter-based app, ensuring smooth functionality and improving overall performance.",
    },
  ];

  const renderedWorkExperiences = workExperiences.map((workExperience) => {
    return (
      <div key={workExperience.title} className="flex gap-5">
        <p className="hidden sm:block text-sm text-gray-400 flex-none pt-1 min-w-[150px]">
          {workExperience.startDate} - {workExperience.endDate}
        </p>
        <div className="text-gray-500">
          <a
            href={workExperience.link}
            target="_blank"
            className="text-base text-gray-300 mb-2 hover:text-indigo-400"
          >
            {workExperience.title}
          </a>
          <p className="mb-1 text-sm">
            {workExperience.company} | {workExperience.jobType}
          </p>
          <p className="mb-1 text-sm sm:hidden">
            {workExperience.startDate} - {workExperience.endDate}
          </p>
          <p className="text-sm">{workExperience.description}</p>
        </div>
      </div>
    );
  });

  return (
    <SectionItem title="Work Experience">
      <div className="flex flex-col gap-5">{renderedWorkExperiences}</div>
    </SectionItem>
  );
}

export default WorkExperienceList;
