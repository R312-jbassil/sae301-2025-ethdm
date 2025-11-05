import PocketBase from 'pocketbase';

const url = import.meta.env.PUBLIC_PB_URL ?? 'http://127.0.0.1:8090';
const pb = new PocketBase(url);


export default pb;
