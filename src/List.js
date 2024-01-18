// export const List = ({title, subtitle, children}) => {
//     return <div><h2>{title}</h2><p>{subtitle}</p>{children}</div>
// }
import {ListItem} from "./ListItem";
import {useEffect, useState} from "react";



const url = "https://example-crud-api.kurzmann.io/posts"



export const List = (props) => {

    const {title} = props                

    const [data, setData] = useState([])           // leeres Array in die Klammer einsetzen "[]"
    
    useEffect( () => {                               // useEffect = Hook!
        const myfetch = async () => {
            try {
                const response = await fetch(url)
                const arrayObj = await response.json()
                setData(arrayObj)
            } catch (e){
                console.log("myfetch error: ", e)
            }
        }
        myfetch()
    }, [])
    
    
    return <div>
    <h2>{title}</h2>
        {data.map(d => <ListItem username={d.username} content={d.content}/>)}           {/*higher Order Function .map -- jedes einzelne Listenelement rausholen ... d = frei wählbar */}
        
    </div>
}