export interface IQuestion {
  question_title: string;
  correct_answer_id: number;
  remaining_questions: number;
  counter: number;
  question_time?: number;
  answers: IAnswer[];
}

export interface IAnswer {
  answer_id: number;
  answer_title: string;
}
