import { Link } from 'react-router-dom';
import './Header.css';
import Home from '../home/Home';
export default function Header() {
    return (
        <div className={"headerDiv"}>
            <h1>  Sky Weaver   </h1>
            <nav>
                <Link to={"/"} >Home </Link>
                <a 
                href="www.faceboock.com"
                target="_blank"> 
                Facebook
                 </a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://twitter.com/">Twitter</a>
            </nav>

        </div>

    )
}