import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  File,
  GraduationCap,
  MailCheckIcon,
  MapPin,
  Quote,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Grid = ({ children }: PropsWithChildren) => (
  <div className="grid lg:grid-cols-5 gap-16 items-start max-w-7xl mx-auto">
    {children}
  </div>
);

const Col3 = ({ children }: PropsWithChildren) => (
  <div className="lg:col-span-3 space-y-8">{children}</div>
);

const Col2 = ({ children }: PropsWithChildren) => (
  <div className="lg:col-span-2 relative">{children}</div>
);

const Section = ({ children }: PropsWithChildren) => (
  <section className="py-20 min-h-screen flex items-center max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8;">
    {children}
  </section>
);

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header = ({ children, className = "" }: HeaderProps) => (
  <p
    className={`text-sm font-medium text-neutral-600 tracking-wide uppercase mb-4 ${className}`}
  >
    {children}
  </p>
);

const StyledImage = ({
  imageLink,
  title,
}: {
  imageLink: string;
  title: string;
}) => (
  <div className="relative aspect-[4/5] overflow-hidden  rounded-sm">
    <Image
      src={imageLink}
      alt={title}
      fill
      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
      priority
    />
  </div>
);

const Info = ({ children }: PropsWithChildren) => (
  <span className="flex items-center gap-4 justify-center text-left">
    <div className="w-8 h-px bg-foreground/40" />
    <span className="text-xs uppercase tracking-[0.2em] text-foreground/80  font-light;">
      {children}
    </span>
  </span>
);

export default function SelfIntroduction() {
  // You can customize these details
  const personalInfo = {
    name: "John Lester Escarlan",
    section: "CMSC 192-C",
    courseAndYear: "BS Computer Science - III",
    location: "Quezon City, Philippines",
    siblings: "Youngest with one sibling",
    highSchool: "North Fairview Highschool",
    motto: "Code with purpose, learn with passion",
    email: "jnescarlan@up.edu.ph",
  };

  const academicDetails = [
    { icon: MapPin, label: "From", value: personalInfo.location },
    { icon: Users, label: "Siblings", value: personalInfo.siblings },
    {
      icon: GraduationCap,
      label: "High School",
      value: personalInfo.highSchool,
    },
    { icon: Quote, label: "Motto", value: `"${personalInfo.motto}"` },
  ];

  return (
    <Section>
      <Grid>
        <Col3>
          <div className="space-y-8">
            <div>
              <Header>CMSC 192 - Introduction</Header>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-light  leading-tight">
                  {personalInfo.name}
                </h1>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs font-medium">
                    {personalInfo.section}
                  </Badge>
                  <Badge variant="outline" className="text-xs font-medium">
                    {personalInfo.courseAndYear}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Academic Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {academicDetails.map(({ icon: Icon, label, value }, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-3 p-4 rounded-sm hover:bg-neutral-100 transition-colors">
                    <div className="p-2 bg-neutral-100 group-hover:bg-neutral-200 rounded-sm transition-colors">
                      <Icon className="w-4 h-4 text-neutral-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-500 mb-1">
                        {label}
                      </p>
                      <p>{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Link
                href="/Escarlan_CMSC192C_Introduction.pdf"
                download="Escarlan_CMSC192C_Introduction.pdf"
              >
                <Button size="lg" variant="outline" className="group relative">
                  <File className="w-4 h-4 mr-2" />
                  Download Introduction
                  <div className="absolute top-2 right-2 w-1 h-1 bg-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
              </Link>
              <Link href={`mailto:${personalInfo.email}`}>
                <Button size="lg" variant="outline" className="group relative">
                  <MailCheckIcon className="w-4 h-4 mr-2" />
                  Email Me
                  <div className="absolute top-2 right-2 w-1 h-1 bg-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
              </Link>
              <Info>Ready to learn CMSC 192</Info>
            </div>
          </div>
        </Col3>

        <Col2>
          <div className="sticky top-8">
            <StyledImage
              imageLink="/hero-image.jpg" // Update with your photo path
              title={personalInfo.name}
            />
          </div>
        </Col2>
      </Grid>
    </Section>
  );
}
