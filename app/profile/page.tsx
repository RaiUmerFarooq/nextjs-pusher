
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] w-full">
            {/* Hero Section */}
            <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-background py-20 md:py-32">
                <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
                <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-2xl">
                        <Image
                            src="/images/AIshort.png"
                            alt="Rai Umer Farooq"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Rai Umer Farooq
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Software Engineer
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            Full Stack Developer
                        </span>
                        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            AI Enthusiast
                        </span>
                        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            FAST University Alumni
                        </span>
                    </div>

                    <div className="mt-4">
                        <a
                            href="/cv/Rai Umer Farooq CV.pdf"
                            download
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">

                {/* Projects */}
                <section>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight">Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card/80">
                            <h3 className="text-xl font-semibold">E-Commerce Website for Pumagas</h3>
                            <p className="text-sm text-muted-foreground mb-2">Jan 2025 - March 2025</p>
                            <p className="text-muted-foreground mb-4">Developed and deployed a fully functional e-commerce website enabling online shopping with product listings, cart functionality, and payment integration.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">React.js</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">Node.js</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">MongoDB</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">Docker</span>
                            </div>
                        </div>

                        <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card/80">
                            <h3 className="text-xl font-semibold">Automated Solar Electricity Sharing</h3>
                            <p className="text-sm text-muted-foreground mb-2">Aug 2024 - Present (FYP)</p>
                            <p className="text-muted-foreground mb-4">Developing a mobile-based solution to automatically share solar-generated electricity with neighbors, promoting sustainable energy distribution.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">React Native</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">Java</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">AWS</span>
                            </div>
                        </div>

                        <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card/80">
                            <h3 className="text-xl font-semibold">Arabic to Persian and Urdu Dictionary</h3>
                            <p className="text-sm text-muted-foreground mb-2">Aug 2024 - Jan 2025</p>
                            <p className="text-muted-foreground mb-4">Built a multilingual dictionary application integrating LLM models to interpret and translate Arabic words.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">Java</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">LLM APIs</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">JDBC</span>
                            </div>
                        </div>

                        <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card/80">
                            <h3 className="text-xl font-semibold">Dataset Annotation Using LLM</h3>
                            <p className="text-sm text-muted-foreground mb-2">Feb 2025</p>
                            <p className="text-muted-foreground mb-4">Created an annotation pipeline using LLMs to improve data processing accuracy for machine learning applications.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">Python</span>
                                <span className="rounded-md bg-muted px-2 py-1 text-xs">LLM APIs</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight">Technical Skills</h2>
                    <div className="rounded-xl border bg-card/50 p-8 backdrop-blur-sm">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h3 className="font-medium mb-2 text-primary">Languages</h3>
                                <p className="text-muted-foreground">Python, Java, C++, TypeScript, JavaScript, SQL, C#</p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2 text-primary">Web Development</h3>
                                <p className="text-muted-foreground">React.js, Next.js, Node.js, Express.js, FastAPI, Django</p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2 text-primary">Database & Cloud</h3>
                                <p className="text-muted-foreground">PostgreSQL, MongoDB, Docker, AWS</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education & Certifications */}
                <div className="grid gap-8 md:grid-cols-2">
                    <section>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight">Education</h2>
                        <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm h-full">
                            <h3 className="text-xl font-semibold">FAST NUCES, Faisalabad</h3>
                            <p className="text-primary font-medium">BS Software Engineering</p>
                            <p className="text-sm text-muted-foreground mt-1">2021 - 2025</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight">Certifications</h2>
                        <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm h-full space-y-4">
                            <div>
                                <h3 className="font-medium">ISC2 CyberSecurity Certification</h3>
                                <p className="text-sm text-muted-foreground">2025</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Introduction to DevOps</h3>
                                <p className="text-sm text-muted-foreground">CI/CD, Automation</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Contact */}
                <section className="text-center pt-8 border-t">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight">Get in Touch</h2>
                    <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                        <a href="mailto:raifarooq7860786@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            raifarooq7860786@gmail.com
                        </a>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            +92 315 5398228
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Profile;
