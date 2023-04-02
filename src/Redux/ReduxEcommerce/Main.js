import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Feature/Slice'

function Main() {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.ecommerce
    })

    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

    if(data.isLoading){
        return "Loading...."
    }

    if(data.isError){
        return "error..."
    }


  return (
    <>
    {
        data.products && data.products.map((item,index) => {
            return <div key={index} ><img src={item.image} ></img>
                        <h1>{item.title}</h1>
            
            </div>
        }) 
    }
    </>
  )
}

export default Main