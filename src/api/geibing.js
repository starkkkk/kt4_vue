import {get} from "@/utils/request";

export function getBing() { 
  return get(`http://202.121.180.70:8109/kols/categories`);
}