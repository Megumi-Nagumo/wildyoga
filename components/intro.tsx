import Image from "next/image";
import morningyoga from "@/public/images/authors/hoverground.jpg"


export default function Intro() {
    return (
        <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-32 md:flex-row">
            <div className="mt-2 flex-1 md:mt-0">
                <h1 className="title no-underline">Hey, I&#39;m Michelle.</h1>
                <p className="mt-3 font-light text-muted-foreground">
                    I&#39;m a yoga teacher and founder of Wild Yoga. I&#39;m passionate about teaching people to find their inner strength and balance.
                </p>
            </div>
            <div className="relative">
                <Image
                    className="flex-1 rounded-lg grayscale"
                    src={morningyoga}
                    alt="Morning Yoga Session"
                    width={175}
                    height={175}
                    priority
                />  
            </div>
        </section>
    )
}
