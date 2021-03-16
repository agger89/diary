import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const TooltipBlock = styled.div`
 
`

interface TooltipProps {
  title: string
}

const Tooltip: FunctionComponent<TooltipProps> = ({ title }) => {

  return (
    <TooltipBlock>
      {title}
    </TooltipBlock>
  )
}

export default Tooltip
