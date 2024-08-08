import Image from "next/image";
import star from './PhilosophyPattern/star.svg'
const Philosophy = () => {
    return (
        <div className="mx-64 my-36">
            <Image src={star} className="absolute left-[230px] top-[185px] pr-2"/>
            <h1 className="text-5xl font-bold mb-20">Our Philosophy</h1>
            <div className="font-semibold text-xl text-slate-600 mb-5">
                <p>Why are you?! What is the purpose of your being? Why not anyone else?</p>
                <p>Who are you?</p>
                <p>Who and how sould you brcome?</p>
            </div>
            <div className="text-lg text-slate-600">
                <p>These are the fundamental questions that formed our journey of "authentic branding".We belive branding is about discov&shy;
                    ering and creating something authentic that lasts forver We consider the word "Brand" equal to Business and "Branding"
                    as Building and Taking Care of Business.
                </p>
                <p>
                    As a long-term partner of choice for investors and businesses who seek authenticity in their business and life, we are commit&shy;
                    ted to bring honesty, creativity, humanity, strategic thinking, insightfulness and authenticity to every partnership and proj- 
                    <br />ect.
                </p>
                <p className="mt-5 text-[20px]">With focus architecture, construction industry and spaces,<b>FEELING OF A LOOK </b>cares about human being and the
                    world around and involve in creating what creates to last.
                </p>
            </div>
        </div>
    );
}

export default Philosophy;

