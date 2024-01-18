import {useEffect, useState} from "react";

export const NumberInput = (props) => {
// Hier alle berechnungen bevor das rendern beginnt.

    const [zahl, setZahl] = useState(20)  // < ---- > das ganze wird auch Hook genannt - useState schreiben 
    
    
    return (
        <div style={{                                  // die zweite geschwungene Klammer bedeutet Objekt
            backgroundColor: "lightblue",
            border: "orange solid 10px"
        }}>
            <input type={"number"} value={zahl} onChange={        
                (event) => {console.log("something changed", event.target.value)// onChange um die Number zu verbinden // Callback - Funktion
                setZahl(event.target.value)
                }
            } />
            <p>Hier soll die Nummer stehen: {zahl}</p>
            <p>Das 3-fache der Zahl ist: {zahl * 3}</p>
        </div>
    )
}