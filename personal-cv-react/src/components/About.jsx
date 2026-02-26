import profile from '../assets/profile.jpg';


function About() {
    return (
        <div className="container">
            <section className="card">
                <h2>About Me</h2>
                <img src={profile} alt="Profile photo" width="200" height="200"/>
                <p>
                    Hi! I’m Alchris June Jamisola, a 2nd-year Bachelor of Science in Information Technology (BSIT) student. 
                    I’m passionate about learning how technology works, especially in areas like programming, system development, 
                    and basic networking.
                </p>
                <p>Email:
                    <a href="mailto:jamisolaalchrisjune@gmail.com">jamisolaalchrisjune@gmail.com</a>
                    GitHub:
                    <a href="https://github.com/alchrisjmsl" target="_blank">https://github.com/alchrisjmsl</a>
                </p>
            </section >
        </div>
    );
}
export default About;