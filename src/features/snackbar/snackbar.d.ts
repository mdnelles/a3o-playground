export type Face = {
   msg: string;
   severity?: any;
};

export type FacesArr = Face[];

export interface SnackbarState {
   visible?: boolean | undefined;
   cubeFocus: number;
   custom: FacesArr;
}
