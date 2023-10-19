export interface pType{
    image:string,
    id:number,
    title:string,
    price:number,
    description:string,
    count?:number,
    userId?:number
}

export interface users{
    id:number,
    email:string,
    password:string,
}

export interface cart{
    user:users,
    product:pType[]
}



