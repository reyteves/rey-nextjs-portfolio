'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-400">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="#" className="font-bold text-xl">Rey Jesus Teves</Link>
          <nav className="ml-auto flex gap-4">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">Skills</Link>
            <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4">Education</Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="grid gap-6 lg:grid-cols-2 items-center py-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Web Developer & Information Systems Analyst</h1>
            <p className="text-xl text-white/90">
              Proactive and detail-oriented Front-End Web Developer with a solid foundation in modern web technologies.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="secondary">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
          <Card className="p-6">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <span>jesus.reyteves@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5" />
                <span>09479500754</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5" />
                <Link href="https://linkedin.com/in/rey-jesus-teves-62b393100" className="hover:underline">
                  LinkedIn Profile
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Github className="h-5 w-5" />
                <Link href="#" className="hover:underline">
                  GitHub Profile
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Front-End Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Responsive Design Principles</li>
                  <li>ReactJS, NextJS</li>
                  <li>Cross-Browser Testing</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Back-End Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>PHP, Python</li>
                  <li>MySQL</li>
                  <li>CodeIgniter, Laravel</li>
                  <li>API Development</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>GitLab, GitHub</li>
                  <li>Troubleshooting & Debugging</li>
                  <li>Team Collaboration</li>
                  <li>UI/UX Integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12">
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Master in Information Technology (MIT)</CardTitle>
                <p className="text-sm text-muted-foreground">AMA OEd (Online Education) | 2021 - Present</p>
              </CardHeader>
              <CardContent>
                <p>Focus on Information Security and Assurance, Multimedia Technology, and Advanced Operating Systems and Networking.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Software Engineering Course</CardTitle>
                <p className="text-sm text-muted-foreground">Zuitt Programming Bootcamp | 2020 - 2021</p>
              </CardHeader>
              <CardContent>
                <p>Full Stack Software Engineering bootcamp focusing on Next.JS, React.JS, MongoDB Atlas, Express, and Node.js.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Information Technology</CardTitle>
                <p className="text-sm text-muted-foreground">Polytechnic University of the Philippines | 2000 - 2006</p>
              </CardHeader>
              <CardContent>
                <p>Concentrated on Software Engineering, Management Information Systems, C/C++ and MySQL programming.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5" />
                  <Link href="mailto:jesus.reyteves@gmail.com" className="hover:underline">
                    jesus.reyteves@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5" />
                  <Link href="tel:09479500754" className="hover:underline">
                    09479500754
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5" />
                  <Link href="https://linkedin.com/in/rey-jesus-teves-62b393100" className="hover:underline">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">© 2024 Rey Jesus Teves. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}