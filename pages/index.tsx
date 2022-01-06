import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    signIn();
  }, [])
  return (
    <div className='text-green-500 text-8xl'>hello world</div>
  )
}

export default Home
