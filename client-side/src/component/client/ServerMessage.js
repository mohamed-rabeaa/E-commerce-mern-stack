import React from 'react'

function ServerMessage(props) {

  const { resMsg, error } = props;

  return (
    <>
      {(() => {
        if (resMsg) {
          return <div className="w-full mt-12 flex items-center justify-center">
            <p className="bg-green-400 px-8 py-4 rounded-md" >
              {resMsg}
            </p>
          </div>
        } else if (error.length > 0) {
          return <div className="w-full mt-12 flex items-center justify-center">
            <p className="bg-red-400 px-8 py-4 rounded-md" >
              {error}
            </p>
          </div>
        }
      })()}
    </>
  )
}

export default ServerMessage
