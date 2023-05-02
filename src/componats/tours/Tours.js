
import Tour from "../tours/Tour/Tour"
import "./Tours.css";
export default function Tours (props){
    // const {id,name,info,image,price}=props
    return (
        <div className={"maindiv"}>
         
        {props.data1.map((ele) =>{
            return (
                <section key={ele.id}> 
                
            <Tour tourName={ele.name}  id={ele.id}  src={ele.image} />
            </section>)
        })}
     
           </div>    
        
    )
}