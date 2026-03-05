import profile from '../assets/profile.jpg';
import Card from "./Card";


function About() {
    return (
        <div className="container">
            <section className="card">
                <Card title="About Me">
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
                </Card>
            </section >
        </div>
    );
}
export default About;