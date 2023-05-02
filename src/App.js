import { Route, Routes } from 'react-router-dom'
import Home from '../src/componats/home/Home'
import './App.css'
import josnData from './data/db.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import TourDetails from '../src/componats/TourDetails/TourDetails'

export default function App(){

    return(
        <>
        <Routes>
            <Route path='/' element={<Home data={josnData} />}  > </Route>
            <Route  path='/city/:id' element={<TourDetails data={josnData} />}> </Route>
        </Routes>
        </>
    )
}
