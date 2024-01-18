// export const List = ({title, subtitle, children}) => {
//     return <div><h2>{title}</h2><p>{subtitle}</p>{children}</div>
// }
import {ListItem} from "./ListItem";

const dummyDaten = [
    {username:"Fatima", content:"Hallihallo"},
    {username:"Rosa", content:"Hola"},
    {username:"Adnan", content:"Bok!"},
]
export const List = (props) => {

    const {title} = props                  // -----> genau das selbe wie oben :)

    
    
    return <div>
    <h2>{title}</h2>
        {dummyDaten.map(d => <ListItem username={d.username} content={d.content}/>)}                                   {/*higher Order Function .map -- jedes einzelne Listenelement rausholen ... d = frei wählbar */}
    </div>
}