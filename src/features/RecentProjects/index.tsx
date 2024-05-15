import Image from "src/assets/charizard.png"
import Card from "src/components/Card"

const projects = [
  {
    title: "This is a test title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    src: Image,
    to: "/projects/1"
  },
  {
    title: "test",
    description: "This is a description",
    src: Image,
    to: "/projects/2"
  },
  {
    title: "test",
    description: "This is a description",
    src: Image,
    to: "/projects/2"
  }
]

const RecentProjects = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-foreground-primary mb-5 text-3xl">
        Recent Projects
      </h2>
      <div className="flex justify-between gap-7">
        {projects.map(project => (
          <Card project={project} />
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
