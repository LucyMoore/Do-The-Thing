export interface TaskDetail {
  name: string
  dueDate: Date | null
  repeat: boolean
  frequency: number
  completedDate: Date | null
}
