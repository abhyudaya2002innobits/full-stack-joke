interface Jokes{
    Title:string,
    Description:string  
}
const Items:React.FC<Jokes>=(j)=>{
    const {Description,Title}=j
    return (
       <>
        <h2>Title:{Title}</h2>
        <h1>Description :{Description}</h1>
       </>
    )
}
export default Items