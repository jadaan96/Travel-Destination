import Home from '../src/componats/home/Home'
import './App.css'
import josnData from './data/db.json'
export default function App(){

    return(
        <>
        <Home data={josnData} />
        </>
    )
}
