import SectionItem from "./SectionItem";

function ProjectsList() {
  const projects = [
    {
      title: "Beautyhaul",
      link: "https://www.beautyhaul.com/",
      description:
        "E-commerce platform project for many beauty brands in Indonesia.",
      technologies: ["Laravel", "CodeIgniter", "Golang", "NodeJS"],
    },
    {
      title: "Somethinc",
      link: "https://www.somethinc.com/",
      description:
        "E-commerce project for beauty brand that produces skincare products, makeup, and beauty tools.",
      technologies: ["CodeIgniter", "Golang", "NodeJS"],
    },
    {
      title: "Hint Of You",
      link: "https://www.hintofyou.com/",
      description:
        "E-commerce project for high-quality perfumes designed to provide a captivating and enchanting fragrance experience.",
      technologies: ["CodeIgniter", "Golang", "NodeJS"],
    },
    {
      title: "Plush Think Sofa",
      link: "https://www.plush.com.au/",
      description:
        "E-commerce project for sofa brands that are specialise in hand crafted, high quality and incredibly comfortable sofas that last.",
      technologies: ["NextJS", "Magento", "Laravel"],
    },
  ];

  const renderedProjects = projects.map((project) => {
    const renderedTechnologies = project.technologies.map((technology) => {
      return (
        <div key={technology} className=" text-gray-300 text-sm">
          {technology}
        </div>
      );
    });

    return (
      <div key={project.title}>
        <a
          href={project.link}
          target="_blank"
          className="text-base text-gray-300 mb-2 hover:text-indigo-400"
        >
          {project.title}
        </a>
        <p className="text-sm text-gray-500 mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">{renderedTechnologies}</div>
      </div>
    );
  });

  return (
    <SectionItem title="Projects">
      <div className="flex flex-col gap-5">{renderedProjects}</div>
    </SectionItem>
  );
}

export default ProjectsList;
