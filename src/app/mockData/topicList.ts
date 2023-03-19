import {HAZMAT_FLASHCARDS} from "./HAZMAT/hazmat-flashcards";
import {LOSS_CONTROL_FLASHCARDS} from "./loss-control-flashcards";
import {CARBON_MONOXIDE_TOPIC} from "./carbon-monoxide-topic";
import {FIRE_CONTROL_FLASHCARDS} from "./fire-control-flashcards";
import {FIREFIGHTER_ENTRANCE_QUIZ} from "./firefighter-entrance-quiz";
import {ICS_100} from "./NIMS/ics-100";
import {IS_700} from "./NIMS/is-700";
import {CPR} from "./first-aid/cpr";
import {ROPES_KNOTS} from "./ropes-knots";

export const TOPIC_LIST = [
  {...FIREFIGHTER_ENTRANCE_QUIZ},
  {...LOSS_CONTROL_FLASHCARDS},
  {...HAZMAT_FLASHCARDS},
  {...CARBON_MONOXIDE_TOPIC},
  {...FIRE_CONTROL_FLASHCARDS},
  {...ICS_100},
  {...IS_700},
  {...CPR},
  {...ROPES_KNOTS},
]
