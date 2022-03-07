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

export interface QuestionsListItem {
  question: string,
  answer: string,
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
  quiz?: QuizListItem[],
  questions?: QuestionsListItem[],
}

export interface LinkListItem {
  text: string,
  link: string,
}
