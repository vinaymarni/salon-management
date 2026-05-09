import { redirect } from 'next/navigation'
import FirstPage from './FirstPage'

export default function Home() {
  // return <FirstPage />
  redirect('/dashboard')
}
