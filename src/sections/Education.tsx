import { education } from "../data/content";
import { SectionHeading } from "../components/SectionHeading";
import { ProfileCard } from "../components/ui/profile-card";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-28 md:px-10">
      <SectionHeading
        eyebrow="Background"
        title="Education"
        description="From mechanical engineering foundations to a specialised Master's in Data Science."
      />

      <div className="space-y-16 md:space-y-24">
        {education.map((edu) => (
          <ProfileCard
            key={edu.id}
            institution={edu.institution}
            degree={edu.degree}
            location={edu.location}
            period={edu.period}
            electives={edu.electives}
            logoUrl={edu.logo}
          />
        ))}
      </div>
    </section>
  );
}
