//@ts-nocheck
import alltrack from "./ALL_TRACK.mp3";
import bvoc from "./B VOC.mp3";
import drums from "./DRUMS.mp3";
import hehe from "./HE HE VOC.mp3";
import highvoc from "./HIGH VOC.mp3";
import jibrish from "./JIBRISH.mp3";
import lead from "./LEAD 1.mp3";
import uuhovoc from "./UUHO VOC.mp3";
import tambourine from "./_tambourine_shake_higher.mp3";

const Audios = [
  { audio: new Audio(alltrack), name: "alltrack" },
  { audio: new Audio(bvoc), name: "bvocal" },
  { audio: new Audio(drums), name: "drums" },
  { audio: new Audio(hehe), name: "hehe" },
  { audio: new Audio(highvoc), name: "highvocal" },
  { audio: new Audio(jibrish), name: "jibrish" },
  { audio: new Audio(lead), name: "lead" },
  { audio: new Audio(uuhovoc), name: "uuho" },
  { audio: new Audio(tambourine), name: "tambourine" },
] as Track[];
export default Audios;
