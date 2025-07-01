"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Send,
  Code,
  Briefcase,
  User,
  FileText,
  Home,
  Layers,
  PenTool,
  Monitor,
  Database,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
  featured?: boolean
}

interface Experience {
  id: number
  role: string
  company: string
  duration: string
  description: string[]
  logo?: string
}

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image?: string
}

interface Skill {
  name: string
  level: number
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/project1",
    github: "https://github.com/username/project1",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Finance App",
    description:
      "Mobile application that helps users track expenses, set budgets, and visualize spending habits with interactive charts.",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management Platform",
    description:
      "Collaborative task management tool with real-time updates, file sharing, and team communication features.",
    tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/project3",
    github: "https://github.com/username/project3",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Weather application with 7-day forecasts, location-based services, and severe weather alerts.",
    tags: ["JavaScript", "REST API", "CSS3", "HTML5"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/project4",
    github: "https://github.com/username/project4",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "Unified dashboard for managing multiple social media accounts with analytics and scheduling capabilities.",
    tags: ["Angular", "TypeScript", "Express", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/project5",
    github: "https://github.com/username/project5",
  },
  {
    id: 6,
    title: "Recipe Finder",
    description:
      "Web application that helps users find recipes based on available ingredients, dietary restrictions, and preferences.",
    tags: ["React", "Node.js", "MySQL", "REST API"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/project6",
    github: "https://github.com/username/project6",
  },
]

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2021 - Present",
    description: [
      "Led the development of the company's flagship web application using React and TypeScript",
      "Improved application performance by 40% through code optimization and implementing lazy loading",
      "Mentored junior developers and conducted code reviews to ensure high code quality",
      "Collaborated with UX/UI designers to implement responsive and accessible interfaces",
    ],
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    duration: "Mar 2018 - Dec 2020",
    description: [
      "Developed and maintained multiple client websites using modern JavaScript frameworks",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Integrated RESTful APIs and third-party services into web applications",
      "Participated in agile development processes and sprint planning",
    ],
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "StartUp Ventures",
    duration: "Jun 2017 - Feb 2018",
    description: [
      "Assisted in the development of web applications using HTML, CSS, and JavaScript",
      "Created and maintained documentation for code and processes",
      "Collaborated with senior developers to implement new features",
      "Participated in user testing and bug fixing",
    ],
    logo: "/placeholder.svg?height=60&width=60",
  },
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Innovations Inc.",
    content:
      "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills have been invaluable to our team.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Solutions Ltd.",
    content:
      "One of the most talented developers I've worked with. They have a deep understanding of frontend technologies and always find elegant solutions to complex problems.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Agency",
    content:
      "A pleasure to work with! They have an excellent eye for design implementation and always ensure the final product matches our vision perfectly.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Vue.js", level: 80, category: "Frontend" },
  { name: "Angular", level: 75, category: "Frontend" },
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3/SASS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 65, category: "Backend" },
  { name: "REST API", level: 85, category: "Backend" },
  { name: "GraphQL", level: 70, category: "Backend" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 65, category: "Tools" },
  { name: "Jest", level: 75, category: "Tools" },
  { name: "Webpack", level: 70, category: "Tools" },
]

export default function PortfolioWebsite() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.some((tag) => tag.includes(activeCategory)))

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", contactForm)
    alert("Thank you for your message! I'll get back to you soon.")
    setContactForm({ name: "", email: "", message: "" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Alex Morgan</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              <Home className="inline-block mr-1 h-4 w-4" />
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              <User className="inline-block mr-1 h-4 w-4" />
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <Layers className="inline-block mr-1 h-4 w-4" />
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <Briefcase className="inline-block mr-1 h-4 w-4" />
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <Mail className="inline-block mr-1 h-4 w-4" />
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50" />
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Available for hire</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Hi, I'm Alex Morgan
                  <span className="block text-emerald-600">Frontend Developer</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and
                  high-performance applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    <Layers className="mr-2 h-4 w-4" />
                    View Projects
                  </Button>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <Link
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] w-[400px] rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Alex Morgan" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Code className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">5+ Years Experience</p>
                      <p className="text-sm text-gray-600">Frontend Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-100 text-emerald-800">About Me</Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Background</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A passionate frontend developer with a keen eye for design and a commitment to creating seamless user
                experiences.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <p className="text-gray-600">
                  Hello! I'm Alex, a frontend developer based in San Francisco, CA. I have a passion for creating
                  intuitive, dynamic user experiences and have been working in web development for over 5 years.
                </p>
                <p className="text-gray-600">
                  I specialize in building modern web applications using React, TypeScript, and other cutting-edge
                  technologies. My approach combines technical expertise with a strong understanding of user experience
                  design principles.
                </p>
                <p className="text-gray-600">
                  When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or
                  contributing to open-source projects. I'm always looking to learn new technologies and improve my
                  skills.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Education</h3>
                    <p className="text-gray-600">B.S. Computer Science</p>
                    <p className="text-sm text-gray-500">University of California, 2017</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">San Francisco, CA</p>
                    <p className="text-sm text-gray-500">Available for remote work</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
                <div className="space-y-6">
                  {["Frontend", "Backend", "Tools"].map((category) => (
                    <div key={category} className="space-y-2">
                      <h4 className="font-medium text-gray-700">{category}</h4>
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill) => (
                            <div key={skill.name} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-emerald-500 rounded-full"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-100 text-emerald-800">Services</Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What I Do</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I offer a range of services to help businesses and individuals create exceptional digital experiences.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-emerald-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
                  <p className="text-gray-600 mb-4">
                    Building responsive, accessible, and performant websites and web applications using modern
                    technologies and best practices.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      Single Page Applications (SPAs)
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      Progressive Web Apps (PWAs)
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      E-commerce Solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-emerald-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <PenTool className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Implementation</h3>
                  <p className="text-gray-600 mb-4">
                    Translating design mockups into pixel-perfect, responsive interfaces with smooth interactions and
                    animations.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      Responsive Design
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      Interactive Prototypes
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      Animation & Micro-interactions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-emerald-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                  <p className="text-gray-600 mb-4">
                    Creating end-to-end solutions with both frontend and backend integration, database design, and API
                    development.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      RESTful API Development
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      Database Architecture
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                      Authentication & Authorization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-100 text-emerald-800">Portfolio</Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A selection of my recent work across different industries and technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={activeCategory === "All" ? "default" : "outline"}
                className={activeCategory === "All" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                onClick={() => setActiveCategory("All")}
              >
                All Projects
              </Button>
              <Button
                variant={activeCategory === "React" ? "default" : "outline"}
                className={activeCategory === "React" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                onClick={() => setActiveCategory("React")}
              >
                React
              </Button>
              <Button
                variant={activeCategory === "Vue" ? "default" : "outline"}
                className={activeCategory === "Vue" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                onClick={() => setActiveCategory("Vue")}
              >
                Vue.js
              </Button>
              <Button
                variant={activeCategory === "Angular" ? "default" : "outline"}
                className={activeCategory === "Angular" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                onClick={() => setActiveCategory("Angular")}
              >
                Angular
              </Button>
              <Button
                variant={activeCategory === "Node" ? "default" : "outline"}
                className={activeCategory === "Node" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                onClick={() => setActiveCategory("Node")}
              >
                Node.js
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {project.featured && (
                        <Badge className="absolute top-3 left-3 bg-emerald-500 text-white">Featured</Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        {project.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                            asChild
                          >
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                            asChild
                          >
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1 h-3 w-3" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-100 text-emerald-800">Experience</Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Work History</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My professional journey and the companies I've had the pleasure to work with.
              </p>
            </div>

            <Tabs defaultValue="experience" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="experience" className="text-base">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Work Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="text-base">
                  <FileText className="mr-2 h-4 w-4" />
                  Education
                </TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="space-y-8">
                {experiences.map((experience) => (
                  <Card key={experience.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-white rounded-lg shadow">
                          <Image
                            src={experience.logo || "/placeholder.svg"}
                            alt={experience.company}
                            width={40}
                            height={40}
                            className="rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">{experience.role}</h3>
                              <p className="text-emerald-600">{experience.company}</p>
                            </div>
                            <Badge className="bg-gray-100 text-gray-700">{experience.duration}</Badge>
                          </div>
                          <ul className="mt-4 space-y-2">
                            {experience.description.map((item, index) => (
                              <li key={index} className="flex items-start text-gray-600">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="education" className="space-y-8">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-white rounded-lg shadow">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="University of California"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">B.S. Computer Science</h3>
                            <p className="text-emerald-600">University of California</p>
                          </div>
                          <Badge className="bg-gray-100 text-gray-700">2013 - 2017</Badge>
                        </div>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2" />
                            <span>Graduated with honors (3.8 GPA)</span>
                          </li>
                          <li className="flex items-start text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2" />
                            <span>Specialized in Web Technologies and Human-Computer Interaction</span>
                          </li>
                          <li className="flex items-start text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2" />
                            <span>Senior project: Developing an accessible learning management system</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-white rounded-lg shadow">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Online Learning Platform"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">Frontend Development Certification</h3>
                            <p className="text-emerald-600">Online Learning Platform</p>
                          </div>
                          <Badge className="bg-gray-100 text-gray-700">2018</Badge>
                        </div>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2" />
                            <span>Advanced JavaScript, React, and Modern Web Development</span>
                          </li>
                          <li className="flex items-start text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2" />
                            <span>Completed 20+ projects and 300+ hours of coursework</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-100 text-emerald-800">Testimonials</Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What People Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Feedback from clients and colleagues I've had the pleasure to work with.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-emerald-100 text-emerald-800">Contact</Badge>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get In Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="grid gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">alex.morgan@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">San Francisco, CA</p>
                      <p className="text-sm text-gray-500">Available for remote work worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Connect</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://github.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Github className="h-6 w-6 text-gray-700" />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Linkedin className="h-6 w-6 text-gray-700" />
                    </Link>
                    <Link
                      href="https://twitter.com/username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Twitter className="h-6 w-6 text-gray-700" />
                    </Link>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Send me a message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Name</label>
                      <Input
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                      <Textarea
                        placeholder="How can I help you?"
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">Alex Morgan</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4 md:mb-0">
              <Link href="#home" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex space-x-4">
              <Link
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
