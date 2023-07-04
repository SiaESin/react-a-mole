import {useEffect} from 'react';
import mole from '../images/mole.png'

function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 3500)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)

    })
    return(
        <div>
            {/* <h2>Mole</h2> */}
            <img src={mole} alt='mole' style={{'width': '30vw'}} onClick={props.handleClick} />
            
            
        </div>
    )
}
export default Mole