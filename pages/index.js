import Link from 'next/link'
import { MainWrapper,LoginWrapper, Input } from "../components";

export default function Home() {
  return (
    <MainWrapper>
     {/* <Link href="/music">
     <img src="https://pa1.narvii.com/6612/95992f0dafb23664c2880118e3bca54f559a5572_hq.gif" alt="tobi"></img>
     </Link> */}
     <LoginWrapper>
       UserName
       <Input/>
       Password
       <Input/>
     </LoginWrapper>
    </MainWrapper>
  )
}
