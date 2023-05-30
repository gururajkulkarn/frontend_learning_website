import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Apicall = () => {
  const[data,setData] = useState([])

  useEffect(()=>{
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-04-22&sortBy=publishedAt&apiKey=9cc9b3af0c7b431e9b5b1e8d316b5cbc')
    .then((response)=>{
      console.log(response.data.articles)
      setData(response.data.articles)
    }).catch((error)=>{
      console.log(error)

    })
  },[])


  return (
    <>
 <Box 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 528,
          height: 528,
        },
      }}
    >

    <Paper elevation={10} style={{border:"1px solid red",borderRadius:"20px"}}/>
    </Box>

  <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",color:"green"}}>News Api Calling Using Axios</h1>

{data.slice(0,10).map((item)=>(
  <div className='m-5'>
    <p>{item.description}</p>
<h1>{item.title}</h1>
<img src={item.urlToImage} />
  </div>
))}



    </>
  )
}

export default Apicall
