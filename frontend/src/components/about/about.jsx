import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import JAVA from '../../assets/java.svg'
import { useState } from 'react'

function About() {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')
    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }
    return (
        <div id="about">
            <h2>
                <button className="toggler" onClick={toggle}>{buttonText}</button>
                About Me
            </h2>
            <div style={{display: display}}>
                <p>
                    My name is Patrick Fish and I'm a student at Boston University studying Computer Science. I'm currently a
                    member of Hack4Impact's junior development team at BU. I'm excited to learn more about 
                    Web Development and Machine Learning. I have experience in Java, JavaScript, Python,
                    and ReactJS. Feel free to contact me at patrickfish10@icloud.com!
                </p>
                <br />
                <h3>My Skills</h3>
                <div className="icons">
                    <img width="60" src={HTML} />
                    <img width="60" src={CSS} />
                    <img width="60" src={PY} />
                    <img width="60" src={JS} />
                    <img width="60" src={JAVA}/>
                </div>
            </div>
        </div>
    )
}

export default About