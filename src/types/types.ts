export type  User = {
  id?: string,
  name: string,
  password?: string,
  mail: string,
  gender: string,
  height: number,
  weight: number
}

export type Comment = {
  id?: string,
  userId: string,
  taskId: string,
  content: string,
  comments?: Comment[] | null,

}

export type  TaskType = {
  id?: string,
  name: string,
  userId: string,
  details: TaskDetailsType[] | null,
  comments?: Comment[] | null,
}

export type  TaskDetailsType = {
  name: string,
  description: string,
}






