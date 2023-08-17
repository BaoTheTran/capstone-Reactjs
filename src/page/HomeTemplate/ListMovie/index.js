import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'
import DangChieu from './dangchieu'
import { actListMovie } from './duck/action'
import { useNavigate } from 'react-router-dom'
import Loading from '../_components/Loading/loading'

export default function ListMovie() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.listMovieReducer.loading);
  const data = useSelector((state) => state.listMovieReducer.data);
  useEffect(() => {
    dispatch(actListMovie(navigate))
  }, [])
  if (loading) return <Loading />
  return (
    <div>
      <DangChieu />
    </div>
  )
}
