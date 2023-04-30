import Footer from "../footer/Footer"
import Header from "../header/Header"
import Tours from "../tours/Tours";
import './Home.css';

export default function Home (props){
    return(
        <div className={"HomeDiv"}>
        <Header />
        <Tours data1={props.data}/>
        <Footer/>
        </div>

    )        
}