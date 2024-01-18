export const ListItem = (props) => {
    const { username, content } = props
    
    
    
    
    return <div style={{
        textAlign:"left",
        padding: 8,
        margin: 8,
        backgroundColor: "#0000004A",
        borderRadius:12,
    }}>
        
        <p style = {{fontSize: 23}}>{username}</p>
        <p>{content}</p>
    </div>
}