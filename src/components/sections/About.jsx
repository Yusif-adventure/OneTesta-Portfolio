



const About = () => {
const frontEndSkill=[
    "React",
    "Vue",
    "TypeScript",
    "Tailwind"
];
const backEndSkills=[
    "Node.js",
    "Python",
    "Aws",
    "MongoDB"
]



    return ( <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>
            <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-3000 mb-6">Passionate about deeloper with expertise in building scalable web applications and creating innovative solutions.

            </p>
        <div className="grid grid-cols-11 md:grid-cols-2 gap-10 ">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
            {frontEndSkill.map((tech,key)=>(
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
            ))}

                </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all" style={{marginLeft:250}}>
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
            {backEndSkills.map((tech,key)=>(
                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
            ))}

                </div>
            </div>

            
            
        </div>
        
        {/*educaction section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-z">
                    <li>    
                        <strong>B.S. in computer Science</strong> - University Of Ghana
                        (2022-1027)
                    </li>
                    <li>
                        Relevant Coursework: Mahcine Learning , Mobile Development and Web development
                    </li>
                </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="
                        font-semibold">Software Enineer at ABC Corp (2020-Present)</h4>
                        <p>
                            Developed and maintained a software for teaching .
                        </p>
                    </div>
                    <div>
                        <h4 className="
                        font-semibold">Intern at Lambert Company Limited (2021)</h4>
                        <p>                  Assisted in building a wed based component and  Restful API      </p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        </div>
        

    </section> );
}
 
export default About;