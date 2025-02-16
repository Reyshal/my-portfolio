import SectionItem from "./SectionItem";

function WorkExperienceList() {
  const workExperiences = [
    {
      title: "Software Engineer",
      link: "https://www.linkedin.com/company/beautyhaul/",
      jobType: "Full-time",
      company: "Somethinc - Beautyhaul",
      startDate: "Mar 2023",
      endDate: "Present",
      description:
        "Developed and integrated various features, including OTP phone verification, product refunds, employee vouchers, and quizzes, from frontend to backend using CodeIgniter. Managed database migrations with Node.js, optimized slow queries on the admin panel, and performed bug fixes and maintenance. Designed and implemented APIs with Laravel to integrate with mobile apps and seamlessly connected with major marketplaces like Tokopedia and Shopee for order management and stock items synchronization.",
    },
    {
      title: "Software Engineer",
      link: "https://www.linkedin.com/company/icubeid/",
      jobType: "Full-time",
      company: "ICUBE",
      startDate: "Sep 2022",
      endDate: "Jan 2023",
      description:
        "Integrated new features across multiple projects, including stock item management in Laravel, image uploads in a Next.js chat app, and a GraphQL-based middleware for a chat project. Improved system reliability through bug fixes and maintenance on Magento, Laravel, and Next.js projects. Developed efficient GraphQL queries and mutations in Laravel for seamless data retrieval in the chat middleware. Built multiple REST APIs and webhooks to enhance system integration and communication. Created comprehensive API documentation for REST and GraphQL, ensuring maintainability and smooth handoff to engineers and QA teams.",
    },
    {
      title: "Engineer Trainee",
      link: "https://www.linkedin.com/company/icubeid/",
      jobType: "Internship",
      company: "ICUBE",
      startDate: "Mar 2022",
      endDate: "Sep 2022",
      description:
        "Completed Magento and Next.js training to enhance full-stack expertise for an upcoming project. Developed new features, including automated stock synchronization across marketplaces using Laravel and cron jobs. Improved project stability by fixing bugs and maintaining the assigned Laravel middleware project. Conducted thorough QA testing, ensuring functionality and quality for a more robust final product.",
    },
    {
      title: "Mobile App Developer",
      link: "https://www.linkedin.com/company/internet-solusi-layanan-informasi-mandiri/",
      jobType: "Part-time",
      company: "Internet Solusi Layanan Informasi Mandiri",
      startDate: "Oct 2021",
      endDate: "Dec 2021",
      description:
        "Designed wireframes in Figma to define the app’s structure and user interface, guiding the development process. Built a foundational app skeleton with a robust architecture using Android Studio and Java, ensuring efficient development. Identified and resolved bugs in a Flutter-based app, improving performance and ensuring smooth functionality.",
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
