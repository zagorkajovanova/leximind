import {Navbar} from "../components/Navbar";
import wave from "../assets/images/wave.png";
import '../components/common.css'

export function Home() {
    return <div className="home">
        <Navbar />
        <img src={wave} alt="wave" className="wave-image"/>
    </div>
}