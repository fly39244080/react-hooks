import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import axios from 'axios'

const Upload:React.FC<RouteComponentProps> = () => {
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e);
        const files = e.target.files
        if(files) {
            const uploadFiles = files[0]
            const formData = new FormData()
            formData.append(uploadFiles.name, uploadFiles)
            axios.post('https://jsonplaceholder.typicode.com/posts',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }).then(result => {
                console.log(result)
                
            })
        }
    }
    return(
     <div>
         <input type="file" name="myFile" id="" onChange = {handleFileChange} />
     </div>
 )
}

export default Upload