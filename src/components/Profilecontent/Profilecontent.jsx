import React from 'react';
import datas from "../../Data/profile.json"



function Profilecontent () {
  return (
    <div className='userscontentdiv'>
      {datas.users.map ((user,item) =>(
        <section key={item} className='users'>
          <div className='userscontent'>
            <h3 className='userstitle'>{user.title}</h3>
            <p className='usersmoney'>{user.money}</p>
            <p className='usersbalance'>{user.balance}</p>
          </div>
          <div>
            <button className='buttonusers'>View transactions</button>
          </div>
            
        </section>
      ))}
    </div>
  )
}

export default Profilecontent