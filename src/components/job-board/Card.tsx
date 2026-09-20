import { BASE_URL } from "."
import { useState, useEffect } from "react"
import './styles.css'
import SkeletonCard from "./SkeletonCard"

interface CardProps{
    id: string
}

interface JobDataType{
    title : string,
    url: string
}

const Card = ({id} : CardProps) =>{
    const [jobData, setJobData] = useState<JobDataType>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        async function fetchJobData(){
            try {
                setIsLoading(true)
                const response = await fetch(`${BASE_URL}/item/${id}.json`)
                if(response.ok){
                    const data = await response.json()
                    setJobData(data)
                }
            } catch (error) {
                    console.log(error)
            }
            finally{
                setIsLoading(false)
            }
        }

        fetchJobData()
    },[])

    if(isLoading){
        return <SkeletonCard />
    }

    return (
        <div className="main-card-container">
                <div>
                {jobData?.title}
            </div>
            <div>
                {jobData?.url}
            </div>
            </div>
    )
}

export default Card