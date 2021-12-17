import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     sample login page
     <Link href="/music">
     <img src="https://pa1.narvii.com/6612/95992f0dafb23664c2880118e3bca54f559a5572_hq.gif" alt="tobi"></img>
     </Link>
    </div>
  )
}
