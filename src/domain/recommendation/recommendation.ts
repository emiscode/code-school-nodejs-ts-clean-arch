import { Student } from '../student/student'

type RecommendationProps = {
  referrer: Student
  recommended: Student
}

class Recommendation {
  constructor(protected props: RecommendationProps) {
    Object.defineProperty(props, 'datetime', {
      value: new Date().toISOString(),
    })
  }
}

export { Recommendation, RecommendationProps }
