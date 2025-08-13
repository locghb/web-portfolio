import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Github, Mail, ExternalLink, Code, Palette, Database, Globe } from "lucide-react"

export default function Portfolio() {
  const skills = [
    { name: "HTML/CSS", level: "Intermediate", icon: Code },
    { name: "JavaScript", level: "Intermediate", icon: Code },
    { name: "React", level: "Beginner", icon: Code },
    { name: "Node.js", level: "Beginner", icon: Database },
    { name: "UI/UX Design", level: "Beginner", icon: Palette },
    { name: "Responsive Design", level: "Intermediate", icon: Globe },
  ]

  const projects = [
    {
      title: "Todo App with React",
      description: "Simple todo app with React and Local Storage",
      tech: ["React", "CSS3", "JavaScript"],
      demo: "#",
      github: "#",
      learned: "I learned about React hooks and state management",
    },
    // {
    //   title: "Landing Page Responsive",
    //   description: "Trang web giới thiệu sản phẩm với thiết kế responsive",
    //   tech: ["HTML5", "CSS3", "JavaScript"],
    //   demo: "#",
    //   github: "#",
    //   learned: "Nắm vững CSS Grid, Flexbox và responsive design",
    // },
    // {
    //   title: "Weather App",
    //   description: "Ứng dụng xem thời tiết sử dụng API",
    //   tech: ["JavaScript", "API", "CSS3"],
    //   demo: "#",
    //   github: "#",
    //   learned: "Làm việc với REST API và xử lý dữ liệu async",
    // },
  ]

  const timeline = [
    {
      date: "Tháng 10, 2022",
      title: "Bắt đầu học lập trình trên trường đại học",
      description: "Khởi đầu hành trình với HTML, CSS cơ bản",
    },
    {
      date: "Tháng 12, 2022",
      title: "Học JavaScript",
      description: "Bắt đầu với JavaScript",
    },
    {
      date: "Tháng 2, 2023",
      title: "Khám phá React",
      description: "Học React và xây dựng ứng dụng đầu tiên",
    },
    {
      date: "Hiện tại",
      title: "Tìm kiếm cơ hội thực tập",
      description: "Sẵn sàng cho vị trí thực tập đầu tiên",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-700">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold portfolio-primary">Portfolio</h1>
          <div className="flex gap-4 items-center">
            <Button variant="ghost" size="sm">
              About me
            </Button>
            <Button variant="ghost" size="sm">
              Projects
            </Button>
            <Button variant="ghost" size="sm">
              Skills
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 portfolio-primary">
            Portfolio - Internship Developer
          </h1>
          <p className="text-xl text-portfolio-text mb-8 leading-relaxed">
            I am <span className="font-semibold portfolio-accent">Phạm Nguyễn Thiên Lộc</span>, I specialize in creating clean, efficient, and user-friendly digital experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-[var(--portfolio-primary)] hover:bg-[var(--portfolio-primary)]/90">
              View projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)] hover:text-white bg-transparent"
            >
              Contact me
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-portfolio-light dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 portfolio-primary">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="hover-lift border-0 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 portfolio-accent" />
                    <h3 className="font-semibold text-lg mb-2 dark:text-white">{skill.name}</h3>
                    <Badge
                      variant="secondary"
                      className="bg-[var(--portfolio-primary)]/10 text-[var(--portfolio-primary)]"
                    >
                      {skill.level}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 portfolio-primary">My projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover-lift border-0 shadow-lg overflow-hidden transform hover:transition-transform dark:bg-gray-700 dark:border-gray-600"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--portfolio-primary)]/10 to-[var(--portfolio-accent)]/10 flex items-center justify-center">
                  <Code className="w-16 h-16 text-[var(--portfolio-primary)]/50" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-portfolio-text">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-[var(--portfolio-light)] dark:bg-gray-600 p-3 rounded-lg mb-4">
                    <p className="text-sm text-portfolio-text font-medium">What I learned:</p>
                    <p className="text-sm text-portfolio-text mt-1">{project.learned}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-portfolio-light dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 portfolio-primary">My learning journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--portfolio-primary)]/20"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  <div className="w-16 h-16 bg-[var(--portfolio-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover-lift dark:border-gray-600">
                      <p className="text-sm portfolio-accent font-semibold mb-2">{item.date}</p>
                      <h3 className="text-xl font-semibold mb-2 portfolio-primary dark:text-white">{item.title}</h3>
                      <p className="text-portfolio-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 portfolio-primary">Contact me</h2>
          <p className="text-xl text-portfolio-text mb-10 max-w-2xl mx-auto">
            I am always ready to chat about projects, collaboration opportunities, or simply share ideas.
          </p>
          <div className="flex gap-4 justify-center mb-10">
            <Button size="lg" className="bg-[var(--portfolio-accent)] hover:transition bg-[var(--portfolio-accent)]/90">
              <Mail className="w-5 h-5 mr-2" />
              Send email
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--portfolio-primary)] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Phạm Nguyễn Thiên Lộc. Designed and built by Phạm Nguyễn Thiên Lộc.</p>
        </div>
      </footer>
    </div>
  )
}
