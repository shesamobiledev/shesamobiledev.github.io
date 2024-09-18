import {CButton, CPopover} from "@coreui/react";

export default function HomeScreen() {
    return (
       <div>
           <CPopover
               content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
               placement="right"
               title="Dismissible popover"
               trigger="focus"
           >
               <CButton color="danger">Dismissible popover</CButton>
           </CPopover>

           <CPopover
               content="New stuff allie."
               placement="right"
               title="Title here"
               trigger={['hover', 'focus']}
           >
               <text>Hello Allie :)</text>
           </CPopover>
       </div>
    );
}
