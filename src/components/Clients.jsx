import React from 'react'
import {clients}  from "../constants/constants"
import styles from "../style"

const Clients = () => (
<section className={`${styles.flexCenter} my-4`}>
  <div  className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client)=>(
      <div key={client.id}>
        <img src={client.logo} alt="client" className='w-[50%] h-[50%] flex justify-between flex-col items-center' />
      </div>
    ))

    }
  </div>

</section>
)

export default Clients