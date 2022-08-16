import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import { DateRangePicker, DateRange } from '@mui/lab'

const DateRangePickers = () => {
    const [date, setDate] = useState<DateRange<Date>>([null, null])
  return (
    <Box width='500px'>
        <DateRangePicker
            startText='Check-in'
            endText='Check-out'
            value={date}
            onChange={(newValue) => {
                setDate(newValue)
            }}
            renderInput={(startProps, endProps) => (
                <>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }} > to </Box>
                    <TextField {...endProps} />
                </>
            )}
        />
    </Box>
  )
}

export default DateRangePickers