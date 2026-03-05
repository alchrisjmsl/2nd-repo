import { useState } from "react";




function Skills({skills}) {
    const [visible, setVisible] = useState(true);

    return (
        <>
            <div className="container">
                <section className="card" id="skillsSection">
                    <button onClick={() => setVisible(!visible)}>
                    Show/Hide Skills
                    </button>
                    {visible && (
                        <>
                        <h2>Skills</h2>
                            <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                                
                            </ul>

                            <ul>
                                <li>Web Development
                                    <ul>
                                        <li>Frontend
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                            </ul>
                                        </li>
                                        <li>Backend</li>
                                    </ul>
                                </li>
                            </ul>
                        </>
                        )}
                </section>
            </div>
        </>
    );    
}
export default Skills;