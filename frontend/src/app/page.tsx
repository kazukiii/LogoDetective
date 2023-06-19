'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (token) {
      router.push('/image_upload')
    } else {
      router.push('/login')
    }
  }, [router])

  return <></>
}
