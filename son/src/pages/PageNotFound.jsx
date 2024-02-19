import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <h1>sayfa bulunamadı</h1>
    <Link to='/' className='btn btn-info'>Ana sayfaya gitmek için tıklayın...</Link>
    </>
  )
}

export default PageNotFound