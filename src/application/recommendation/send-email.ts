import { Student } from '../../domain/student/student'

interface SendEmailRecommendation {
  sendTo(student: Student): void
}

export { SendEmailRecommendation }
