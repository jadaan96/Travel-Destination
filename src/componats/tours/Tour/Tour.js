
import "./Tour.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
export default function Tour(props) {
    console.log(props.tourName)
    return (
       
        <div className={"TourDiv"} key={props.id}>
            <Link to={`/city/${props.id}`} >
                <div className={"divClass"} key={props.id} >
                    <img className={'imgClass'}  src={props.src} />
                    <p >{props.tourName}</p>
                </div></Link>
        </div>
    )
}





















