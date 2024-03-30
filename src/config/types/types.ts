export type PageableResponseType<D extends object> = {
  count: number;
  results: D[];
  //below key should has proper type but in my case it's unnecessary
  //so I've just left unknown type
  next: unknown;
  previous: unknown;
};

export type MinifigResponseType = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
};
