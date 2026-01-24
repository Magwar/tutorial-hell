const projects = [
  {
    title: "Portfolio Website",
    description: "Personal website built with React and Tailwind CSS.",
  },
  {
    title: "Todo App",
    description: "A simple task manager with state and components.",
  },
  {
    title: "Weather App",
    description: "Fetches live weather data using an API.",
  },
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen scroll-mt-24">
      <h2 className="text-4xl font-bold mb-6">Work</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
