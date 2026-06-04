export interface ProductOption {
  id: string;
  label: string;
}
 
export interface API_RESPONSE<T>{
   success:string,
   message:string,
   data:T
}