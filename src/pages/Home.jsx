import Header from "../components/Header";
import { MdOutlineComputer } from "react-icons/md"
import { AiFillHtml5 } from "react-icons/ai"
import { BiLogoCss3 } from "react-icons/bi"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoNodejs } from "react-icons/bi"
import { BiLogoPython } from "react-icons/bi"
import WeatherAppImg1 from '../assets/WeatherAppImg1.png';
import WeatherAppImg2 from '../assets/WeatherAppImg2.png';
import LocalServicesImg1 from '../assets/LocalServicesImg1.png';
import ToDoImg1 from '../assets/ToDoImg1.png';
import CalculatorImg1 from '../assets/CalculatorImg1.png';

function Home() {
    
    return (
        <div>
            <Header />
            <div className="home-container">
                <div class="home-title">
                    <div class="pc-icon">
                        <MdOutlineComputer />
                    </div>
                    <h1>Dawson Murray</h1>
                </div>
            </div>
            <div class="about-container">
                <div class="about-title">
                    <h1>About Me</h1>
                </div>
                <div class="about-section">
                    <p>
                    Hello! My name is Dawson Murray and I am from the Badger Newfoundland. I'm currently a software development student at Keyin College, nearing the end of my second semester. I'm excited to graduate in April 2024 and embark on a fulfilling journey in the tech world.
                    </p>

                    <p>
                    When I'm not diving into code, you'll often find me indulging in my favorite hobbies. I'm an avid video gamer, capturing stunning moments through my camera lens, and exploring the world of cars. My diverse interests keep me engaged and inspired every day.
                    </p>

                    <p>
                    Additionally, I hold a diploma as a draft and design specialist, showcasing my passion for precision and creative problem-solving. I'm eager to bring my skills to the forefront as I continue to grow in my software development journey.
                    </p>

                    <div class="skills">
                    </div>
                    <div class="skills-icons">
                        <AiFillHtml5 className="skill-icon html-icon" />
                        <BiLogoCss3 className="skill-icon css-icon" />
                        <BiLogoJavascript className="skill-icon javascript-icon" />
                        <BiLogoReact className="skill-icon react-icon" />
                        <BiLogoNodejs className="skill-icon nodejs-icon" />
                        <BiLogoPython className="skill-icon python-icon" />
                    </div>
                </div>
            </div>
            <div class="project-page">
                <div class="project-container">
                    <div class="project-title">
                        <h1>Projects</h1>
                    </div>
                    <div className="project">
                    <div className="project-image">
                        <img src={WeatherAppImg1} alt="Weather App" />
                    </div>
                    <div className="project-text">
                        <h3>Weather App</h3>
                        <p>The Weather App is a web application that provides real-time weather information. With a clean and intuitive user interface, users can easily enter a location and receive up-to-date weather data, including temperature, humidity, wind speed, and more.</p>

                        <p>The app uses APIs to fetch accurate weather information and displays it in a visually appealing manner. Users can also view extended forecasts and stay informed about the weather conditions at a glance.</p>

                        <p> This project demonstrates my proficiency in integrating APIs, handling data, and creating user-friendly interfaces. It was built using HTML, CSS, JavaScript, and React.
                        </p>

                    </div>
                    </div>
                    <div className="project">
                    <div className="project-text">
                        <h3>Service Fusion</h3>
                        <p>The Local Services App is an ongoing project aimed at connecting local service providers with users seeking various services in the community. While the app is a work in progress, it currently allows users to create and browse service listings.</p>

                        <p>As of now, users can explore available services and view basic details about each listing. Although the search functionality is not yet implemented, users can click on individual listings to learn more about the services offered by each provider.</p>

                        <p>This project demonstrates my ability to develop user interfaces using React and showcases my commitment to building practical solutions that enhance community interactions. The Local Services App is being developed with a focus on responsive design and user experience.</p>

                    </div>
                    <div className="project-image">
                        <img src={LocalServicesImg1} alt="Project 2" />
                    </div>
                    </div>
                    <div className="project">
                    <div className="project-image">
                        <img src={ToDoImg1} alt="Project 3" />
                    </div>
                    <div className="project-text">
                        <h3>To Do App</h3>

                        <p>The To-Do App is a productivity tool designed to help users organize their tasks and manage their daily activities effectively. With a simple and user-friendly interface, users can easily create, update, and track their tasks in one place.
                        </p>

                        <p>This app allows users to add tasks, set priorities, and mark them as complete. The intuitive design encourages users to focus on their tasks without unnecessary complexity.
                        </p>

                        <p>This project showcases my proficiency in front-end development using React and my ability to design and implement functional user interfaces. By building the To-Do App, I aimed to create a practical tool that aids users in staying organized and boosting their productivity.
                        </p>

                    </div>
                    </div>
                    <div className="project">
                    <div className="project-text">
                        <h3>Calculator</h3>

                        <p>The Calculator App is a versatile tool that provides users with the ability to perform basic arithmetic calculations quickly and accurately. With its sleek and intuitive design, users can effortlessly perform addition, subtraction, multiplication, and division operations.</p>

                        <p>This app features a user-friendly interface that includes a keypad for input and displays both the entered expression and the calculated result. It also supports handling parentheses and clear functionality for a seamless user experience.</p>

                        <p>The Calculator App demonstrates my skills in creating interactive and functional applications using React. By building this app, I aimed to provide users with a handy tool that helps them carry out mathematical calculations with ease.</p>

                    </div>
                    <div className="project-image">
                        <img src={CalculatorImg1} alt="Project 4" />
                    </div>
                    </div>
                </div>
            </div>
            <div class="contact-container">
                <div class="contact-title">
                    <h1>Contact Me</h1>
                </div>
                <form class="contact-form">
                <div className="form-group">
                    <input type="text" id="first-name" className="form-input" placeholder="First Name" />
                    <label htmlFor="first-name" className="form-label">First Name</label>
                </div>
                <div className="form-group">
                    <input type="text" id="last-name" className="form-input" placeholder="Last Name" />
                    <label htmlFor="last-name" className="form-label">Last Name</label>
                </div>
                <div className="form-group">
                    <input type="email" id="email" className="form-input" placeholder="Email" />
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="form-group">
                    <textarea id="message" className="form-input" placeholder="Your Message" rows="5"></textarea>
                    <label htmlFor="message" className="form-label">Your Message</label>
                </div>
                <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home;