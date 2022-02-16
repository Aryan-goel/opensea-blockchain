import Header from '../Components/Header'
import Hero from '../Components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import {client} from '../lib/SanityClient'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet } = useWeb3()
  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'user',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }
      const result = await client.createIfNotExists(userDoc)
    })()
  }, [address])
  
  return (
    <div className={style.wrapper}>
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            connect wallet
          </button>
          <div className={style.details}>
            you need chrome to border
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  )
}
