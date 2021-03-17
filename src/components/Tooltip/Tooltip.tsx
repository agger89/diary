import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const TooltipBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 18px;
  padding: 4px 8px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 1.3px;
  white-space: nowrap;
  &:after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 6px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
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
