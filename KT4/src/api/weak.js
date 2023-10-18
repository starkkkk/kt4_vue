import {get} from "@/utils/request";

export function getWeak() {
  return get(`http://202.121.180.70:8109/kols/getAll`);
}
