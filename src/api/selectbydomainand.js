import {get} from "@/utils/request";

export function selectbydomainand(one,two,three,four) {
  return get(`http://202.121.180.70:8109/reply/selectByAllFourTags`,{domain:one,event:two,tagL1:three,tagL2:four});
}
