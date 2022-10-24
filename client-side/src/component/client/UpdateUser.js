import React from 'react'
import { useDispatch } from 'react-redux';
import { changePhoto } from '../../redux/reducers/userSlice';

const UpdateUser = () => {

  const [selectedFile, setSelectedFile] = React.useState('mohamed');

  const dispatch = useDispatch()

  const userData = JSON.parse(localStorage.getItem('profile')) || null
  const photo = userData.img || '/assets/imgs/default-user.png'

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    var formData = new FormData();
    formData.append('img', selectedFile);
    dispatch(changePhoto({ data: formData }))
  }

  return (
    <div className='mt-20 px-16'>

      <div className='max-w-40 max-h-80 overflow-hidden'>
        <img src={photo} alt='avatar' className='w-60 h-60 rounded-full mx-auto' />
      </div>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" value="Upload File" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full mt-6 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
      </form>

    </div>
  )
}
export default UpdateUser