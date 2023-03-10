import { SendEmailRecommendation } from '../../application/recommendation/send-email'
import { Student } from '../../domain/student/student'

class FakeSendEmailRecommendation implements SendEmailRecommendation {
  sendTo(student: Student): void {
    console.log(`Email sent to ${student.email}`)
  }
}

export { FakeSendEmailRecommendation }
