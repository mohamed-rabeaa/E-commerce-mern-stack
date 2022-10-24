import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../.././redux/reducers/authSlice";
import ServerMessage from '../.././component/client/ServerMessage'

export default function EmailVerify() {

  const { authError, authResMsg } = useSelector((state) => ({ ...state.auth }));

  const dispatch = useDispatch();

  const param = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/api/auth/${param.id}/verify/${param.token}`;
    dispatch(verify({ url }))

  }, [])

  return (
    <>
      <ServerMessage resMsg={authResMsg} error={authError} />

      {authResMsg &&
        <div className="w-full height-full flex items-center justify-center content-center">
          <Link to="/" className="bg-green-400 px-8 py-4 rounded-md" >
            move to home page
          </Link>
        </div>
      }
    </>
  )
}