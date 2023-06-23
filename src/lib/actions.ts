import { postData } from '../lib/store';

export async function saveData(data: string) {
  postData.set(data);
  
}