import { useEffect, useState } from "react"
import Items from "./Items";

const Body=()=>{
    const[jokes,setJokes]=useState<string[]>([])
    const getData=async ()=>{
        const data=await fetch('/api/jokes');
        const response=await data.json()
        console.log(response)
        setJokes(response)
    }
    const handleClick=()=>{
        getData()
    }
    return (
        <>
        <h1>chai</h1>
        <button onClick={handleClick}>Get Jokes</button>
        <h2>Total jokes: {jokes.length}</h2>
        {jokes.map((j:any)=>(<Items key={j.id} Description={j.description} Title={j.title}/>))}
        </>
    )
}
export default Body