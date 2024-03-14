import { Fetcher } from 'swr';

const fetcher: Fetcher<any, string> = (route: string) => fetch(route).then((res) => res.json());
export default fetcher;
