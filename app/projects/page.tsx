import Projects from '@/components/projects';
import { getProjects } from '@/lib/projects';


export default async function ProjectsPage() {
    //'getProjects' is going to go and read the content and render project list 
    const projects = await getProjects();

    return (
        <section className="pb-24 pt-40">
            <div className="container max-w-3xl">
                <h1 className="title mb-12">Projects</h1>
        <Projects projects={projects} />

            </div>
        </section>
    )
}