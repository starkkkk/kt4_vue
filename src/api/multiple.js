import {get} from "@/utils/request";

export function getMultiple(params) {
  return get(`http://202.121.180.70:8109/competition/calc`,{startDate:params});
}
