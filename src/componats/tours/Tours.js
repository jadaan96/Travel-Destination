import "./Tours.css";
export default function Tours (props){
    console.log(props)
    // const {id,name,info,image,price}=props
    return (
        <div className={"TourDiv"}>
            
             {props.data1.map(ele =>{
                return (
                    <div
                     key={ele.id}
                    className={"divClass"}
                    >
                        <p> {ele.name} </p>   
                        <img 
                        id ={ele.id}
                        className={"imgClass"}
                        src={ele.image} alt={ele.name}></img>                  
                        
                    </div>
                )
             })}
            
      </div>

    )
}