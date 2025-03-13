export interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export interface ScheduleFormData {
  name: string
  email: string
  observations: string | null
  date: Date
}
