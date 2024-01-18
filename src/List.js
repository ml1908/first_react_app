export const List = ({title, subtitle, children}) => {
    return <div><h2>{title}</h2><p>{subtitle}</p>{children}</div>
}

// export const List = (props) => {
//    
//     const {title, subtitle, children} = props                   -----> genau das selbe wie oben :)
//
//     return <div>
//     <h2>{title}</h2>
//     <p>{subtitle}</p>
//     {children}
//     </div>
// }