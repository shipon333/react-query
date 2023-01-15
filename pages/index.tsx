import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Users from "../src/component/Users"
import DependentQuery from "../src/component/DependentQuery"
import Todo from "../src/component/AddTodo"
import User from '../component/User'
export default function Home() {
  return (
    
    <div>
      {/* <DependentQuery id={1} /> */}
      {/* <Todo /> */}
      <User />
    </div>
  )
}
