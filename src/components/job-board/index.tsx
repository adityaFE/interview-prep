import { useState, useEffect } from "react"
import Card from "./Card"
import './styles.css'

export const BASE_URL = `https://hacker-news.firebaseio.com/v0/`


const JobBoard =() =>{

    const [jobIdData, setJobIdData] = useState<[]>([])
    const [visibleData,setVisibleData]= useState<number>(6)
    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch(BASE_URL+'jobstories.json')
                if(response.ok){
                    const data = await response.json()
                    setJobIdData(data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    },[])


    const handleLoadMore = () =>{
        setVisibleData((prev)=> prev+6)
    }

    console.log(jobIdData)

    return (
        <div className="main">
        <div className="main-container">
            {
                jobIdData.slice(0,visibleData).map((jobId)=>(
                    <Card key={jobId} id={jobId} />
                ))
            }
        </div>

        {visibleData< jobIdData.length && <button type="button" onClick={handleLoadMore} className="load-more"> Load More Jobs</button>}
        </div>
        
    )
}

export default JobBoard