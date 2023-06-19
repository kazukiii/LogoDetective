'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import axiosInstance from '@/services/axiosInstance'
import Image from 'next/image'

interface Annotation {
  description: string
}

interface ResponseData {
  annotations: Annotation[]
}

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [response, setResponse] = useState<ResponseData | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    setSelectedFile(file || null)
  }

  useEffect(() => {
    const uploadFile = async () => {
      if (selectedFile) {
        const formData = new FormData()
        formData.append('file', selectedFile)

        try {
          const response: AxiosResponse = await axiosInstance.post('/logo/upload', formData)

          if (response.status !== 200) {
            throw new Error('Failed to upload file')
          }

          setResponse(response.data)
          setImageUrl(URL.createObjectURL(selectedFile))
        } catch (error: any) {
          alert(error.message)
        }
      }
    }

    if (selectedFile) {
      uploadFile()
    }
  }, [selectedFile])

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          LogoDetective 🕵
        </a>
        <label className="block font-bold mb-2 text-sm text-gray-900 dark:text-white" htmlFor="file_input">
          Upload your logo here ↓
        </label>
        <input
          className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help"
          id="file_input"
          onChange={handleFileChange}
          type="file"
        />
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
        {imageUrl && (
          <div>
            <p>Image:</p>
            <Image src={imageUrl} alt="Uploaded" width={150} height={150} />
          </div>
        )}
        {response && (
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <div>This logo is ↓</div>
            <div className="text-2xl">
              {response.annotations[0] ? response.annotations[0].description : 'Cannot detect'}
            </div>
          </div>
        )}
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
        >
          View all histories
        </button>
      </div>
    </section>
  )
}
