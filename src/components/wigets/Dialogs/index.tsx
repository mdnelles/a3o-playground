import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { clearDialog, setDialog } from "../../../features/dialog/dialogSlice";
import SourceCode from "./SourceCode";
import Examples from "./Examples";

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement<any, any>;
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction='up' ref={ref} {...props} />;
});

export default function Dialogs() {
   const dis = useAppDispatch();
   const dialog: any = useAppSelector((state) => state.dialog);
   const { title, open } = dialog;
   const body = title === "Source Code" ? <SourceCode /> : <Examples />;
   const handleClose = () => {
      dis(clearDialog());
   };

   React.useEffect(() => {
      // toggle
   }, [open]);

   return (
      <div>
         <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby='Dialog'
         >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{body}</DialogContent>
            <DialogActions>
               <Button onClick={handleClose} variant='contained'>
                  close
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
