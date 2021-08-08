import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import * as SC from './styles'

export interface UploadProps {
    action: string;
    // defaultFileList?: UploadFile[];
    // beforeUpload? : (file: File) => boolean | Promise<File>;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    // onChange?: (file: File) => void;
    // onRemove?: (file: UploadFile) => void;
    // headers?: {[key: string]: any };
    // name?: string;
    // data?: {[key: string]: any };
    // withCredentials?: boolean;
    // accept?: string;
    // multiple?: boolean;
    // drag?: boolean;
  }
 const UploadFile: FC<UploadProps> = (props) => {
    const { onProgress } = props
    const fileInput = useRef<HTMLInputElement>(null)
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        if (!files) {
          return
        }
        uploadFiles(files)
        if (fileInput.current) {
          fileInput.current.value = ''
        }
      }
      const uploadFiles = (files: FileList) => {
        const postFiles = Array.from(files)
        postFiles.forEach(file => {
            const formData = new FormData()
            formData.append(uploadFiles.name, file)
            axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (e) => {
                    const percentage = Math.round((e.loaded * 100) / e.total) || 0
                    if (percentage <= 100) {
                        if (onProgress) {
                            onProgress(percentage, file)
                          }
                    }
                }
            }).then(result => {
                console.log(result)

            })
        })
      }
      const handleClick = ()=>{
        if (fileInput.current) {
            fileInput.current.click()
           }
      }
      return (
          <SC.UploadComponent>
               <button onClick={handleClick}>上传</button>
               <input
                className="file-input"
                style={{ display: 'none' }}
                ref={fileInput}
                onChange={handleFileChange}
                type="file"
               />
          </SC.UploadComponent>
      )
  }

  export default UploadFile
