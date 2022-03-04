import moment from 'moment';

export default class DateTools {
  public static shortDate(date: string): string {
    if (!date) return '';

    const shortDate = moment(date).format('MM.DD.YYYY');

    return shortDate || '';
  }

  public static fullDateTime(date: string): string {
    if (!date) return '';

    const fullDateTime = moment(date).format('MMM.DD.YYYY hh:mm:ss');

    return fullDateTime || '';
  }
}
