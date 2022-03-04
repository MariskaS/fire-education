import {BUTTON_TYPE, HEADING_TYPE, STATE_STATUS} from "./constant";

export type StateStatuses = typeof STATE_STATUS.idle | typeof STATE_STATUS.failed | typeof STATE_STATUS.loading;

export type HeadingType = typeof HEADING_TYPE.title | typeof HEADING_TYPE.subtitle;

export type ButtonType = typeof BUTTON_TYPE.promoAccent | typeof BUTTON_TYPE.promoPrimary | typeof BUTTON_TYPE.accent;
