import {useEffect} from 'react';
import molehill from '../images/molehill.png'

function EmptySlot(props){
    useEffect(() =>{
        let randSeconds = Math.ceil(Math.random() * 8000)
        let timer = setTimeout(() =>{
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            {/* <h2>Empty Slot</h2> */}
            <img src={molehill} alt='empty molehill' style={{'width': '30vw'}} />

        </div>
    )
}

export default EmptySlot