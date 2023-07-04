import React, {useState} from 'react'
import EmptySlot from './emptyslot'
import Mole from "./mole"

function MoleContainer(props){
    let [theMole, setTheMole] = useState(false)
    let handleClick = () => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer 