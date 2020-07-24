import React, { useState } from 'react'
import { Pagination } from '@material-ui/lab'

const SectionFooter = ({ count }) => {
  const [page, setPage] = useState(1)

  const handleChange = (e, value) => {
    setPage(value)
  }

  return (
    <div>
      <Pagination count={count} color="primary" page={page} onChange={handleChange} />
    </div>
  )
}

export default SectionFooter
