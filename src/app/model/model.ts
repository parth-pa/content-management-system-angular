export class dataList {
  id?: number;
  title?: any;
  description?: any;
  image?: string;
  prefId?: number;
  subPreferenceId?: any;
  status?: any;
  approved?: boolean;
}

export class dataList2 {
  id?: number;
  title?: string;
  description?: string;
  image?: string;

  // id? : number
  // name? :string
}

export class topicList {
  id?: number;
  name?: string;
  pref_id?: number;
}

export class preferenceList {
  preferenceId?: number;
  preferenceName?: string;
  icon?: any;
  routerlink?: any;
}

// userbodyapi

export class Getdata {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  prefname?: string;
  approved?: boolean;
}

export class subdata {
  id?: number;
  name?: string;
  pref_id?: number;
}

export class feed {
  name?: any;
  feedback?: string;
  email?: string;
  phonenumber?: any;
}
