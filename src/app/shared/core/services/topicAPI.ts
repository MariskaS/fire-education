import {TopicListItem} from "../interfaces";
import {TOPIC_LIST} from "../../../mockData/topicList";

export function fetchTopicList() {
  return new Promise<{ data: TopicListItem[] }>((resolve) =>
    setTimeout(() => resolve({ data: TOPIC_LIST }), 0)
  );
}
