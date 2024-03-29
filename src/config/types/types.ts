export type PageableResponseType<D extends object> = {
  count: number;
  results: D[];
  //below key should has proper type but in my case it's unnecessary
  //so I've just left unknown type
  next: unknown;
  previous: unknown;
};
