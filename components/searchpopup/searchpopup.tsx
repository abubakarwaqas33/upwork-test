
import { FC  } from 'react'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

type PopOverProps = {
    trigger: string,
    placement: string,
    target: string,
    headerText: string,
    className: string,
    children: React.ReactNode
  }
  
const SearchPopUp: FC<Partial<PopOverProps>> = ({ trigger, className, headerText, children, target='' }) => (
    <UncontrolledPopover trigger={trigger} placement="bottom" target={target} className={`${className}`}>
    <PopoverHeader>{headerText}</PopoverHeader>
    <PopoverBody>{children}</PopoverBody>
  </UncontrolledPopover>
)

export default SearchPopUp