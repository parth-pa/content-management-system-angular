export class dataList{

id?:number
title?:string
description?:string
image?:string
prefId?:number
subPreferenceId?:number



}

export class dataList2{

  id?:number
title?:string
description?:string
image?:string

// id? : number
// name? :string

}

export class topicList{

  blogId?:number
  topic?:string
  preferenceId ?:number
}

export class preferenceList{

  preferenceId?:number
  preferenceName?:string
  icon?:any

}



// userbodyapi

export class Getdata{
  id?:number
  title?:string
  description?:string
  image?:string
  prefname?: string
}


export class subdata {
  id?: number
  name?: string
  pref_id?: number
}

