import axios from "axios"
import {useState, useEffect} from "react"

export function useFetch<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null) 
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => { 
        axios.get(url)
        .then( response => setData(response.data) )
        .finally( () => setIsLoading(false) )
    }, [url])

    return {data, isLoading}
}
 
