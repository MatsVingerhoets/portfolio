import Link from "src/components/Link"
import Label from "src/components/Label"

const ContactInfo = () => {
  return (
    <>
      <h2 className="font-bold mt-8 text-center text-foreground-primary mb-5 text-3xl w-100 border-b-2 border-accent-default">
        Contact
      </h2>
      <div className="flex flex-col gap-6">
        <Label icon="mdi:email">
          <a
            className="text-foreground-primary text-base"
            href="mailto:mats.vingerhoets5@gmail.com"
          >
            mats.vingerhoets5@gmail.com
          </a>
        </Label>
        <Label icon="material-symbols:phone-android">
          <p className="text-foreground-primary text-base">+32 4 75 29 70 09</p>
        </Label>
        <Label icon="ph:github-logo-fill">
          <Link
            className="w-fit mt-1 mb-2 text-accent-default border-b-2 border-accent-default"
            to="https://github.com/MatsVingerhoets"
          >
            Github
          </Link>
        </Label>
        <Label icon="mdi:linkedin">
          <Link
            className="w-fit mt-1 mb-2 text-accent-default border-b-2 border-accent-default"
            to="https://www.linkedin.com/in/mats-vingerhoets-9a7352185/"
          >
            LinkedIn
          </Link>
        </Label>
      </div>
    </>
  )
}

export default ContactInfo
