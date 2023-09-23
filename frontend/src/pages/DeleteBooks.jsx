import React, {useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams} from 'react-router-dom'
import {useSnackbar} from 'notistack'


const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar }= useSnackbar();

  const handleDeleteBooks = () =>{
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/');
        enqueueSnackbar('Book Deleted Successfully', {variant: 'success'})
      }).catch((error)=>{
        setLoading(false)
        console.log(error)
        enqueueSnackbar('Error', {variant: 'error'})
        // alert("Error occured please check console")
      })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-2xl'>Are you sure You want to delete This Book?</h3>
            <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBooks}>
              Yes, Delete it!
            </button>
      </div>
    </div>
  )
}

export default DeleteBooks