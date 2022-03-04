export interface TagListItem {
  text: string,
  isCorrect: boolean,
}
export interface ResourceListItem {
  name: string,
  link: string,
}

export interface QuizListItem {
  question: string,
  answer: string,
  variants: TagListItem[],
}

export interface TopicListItem {
  id: string,
  img: string,
  name: string,
  date: string,
  description: string,
  resources: ResourceListItem[],
  type: string,
  keys: string[],
  questions?: QuizListItem[],
}
