import React from 'react'
import UserInfo from '../../component/client/UserInfo'
import UpdateUser from '../../component/client/UpdateUser'
import { useSelector } from 'react-redux';
import ServerMessage from '../../component/client/ServerMessage';


const User = () => {
  const { error, resMsg } = useSelector((state) => ({ ...state.cart }));

  return (
    <>
      <ServerMessage resMsg={resMsg} error={error} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
        <UserInfo />
        <UpdateUser />
      </div>
    </>
  )
}

export default User