import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiApachekafka,
  SiApachespark,
  SiCss,
  SiD3,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiKeras,
  SiLinux,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiOpenjdk,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRos,
  SiScikitlearn,
  SiSpringboot,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { SectionHeading } from "../components/SectionHeading";

type SkillChip = { name: string; Icon?: IconType };

const rowOne: SkillChip[] = [
  { name: "Python", Icon: SiPython },
  { name: "Java", Icon: SiOpenjdk },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "SQL" },
  { name: "R" },
  { name: "React.js", Icon: SiReact },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Git", Icon: SiGit },
];

const rowTwo: SkillChip[] = [
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "GCP", Icon: SiGooglecloud },
  { name: "Docker", Icon: SiDocker },
  { name: "CI/CD" },
  { name: "Cloud Build" },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "Apache Kafka", Icon: SiApachekafka },
  { name: "PySpark", Icon: SiApachespark },
  { name: "Linux CLI", Icon: SiLinux },
  { name: "Jira", Icon: SiJira },
];

const rowThree: SkillChip[] = [
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "Keras", Icon: SiKeras },
  { name: "Scikit-learn", Icon: SiScikitlearn },
  { name: "OpenCV", Icon: SiOpencv },
  { name: "Pandas", Icon: SiPandas },
  { name: "NumPy", Icon: SiNumpy },
  { name: "Tableau" },
  { name: "D3.js", Icon: SiD3 },
  { name: "Power BI" },
  { name: "Matplotlib" },
  { name: "Seaborn" },
  { name: "ROS2", Icon: SiRos },
];

function MarqueeRow({ items, reverse = false }: { items: SkillChip[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row overflow-hidden">
      <div className={`flex w-max gap-4 ${reverse ? "marquee-track--reverse" : "marquee-track"}`}>
        {doubled.map(({ name, Icon }, i) => (
          <figure
            key={`${name}-${i}`}
            className="flex w-28 shrink-0 flex-col items-center gap-3 rounded-2xl border border-border bg-card px-3 py-5 shadow-sm sm:w-32"
          >
            {Icon ? (
              <Icon size={28} className="text-accent" />
            ) : (
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-[11px] font-bold text-accent">
                {name.slice(0, 2).toUpperCase()}
              </span>
            )}
            <figcaption className="text-center text-[11px] font-semibold leading-tight text-foreground/80">
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28 md:px-10">
      <SectionHeading
        eyebrow="Skills"
        title="My Stack"
        description="A full-stack, cross-disciplinary toolkit — from cloud-native backend systems to computer vision and machine learning."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="-mx-6 space-y-4 md:-mx-10"
      >
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
        <MarqueeRow items={rowThree} />
      </motion.div>
    </section>
  );
}
