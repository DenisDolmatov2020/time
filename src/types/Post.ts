import { User } from '@/types/User'

export interface Post {
  _id: string,
  title: string,
  text: string,
  file: string,
  changeable: boolean,
  user: User;
  createdAt: Date,
  updatedAt: Date,
  showAt: Date,
}

export interface PostsResponse {
  data: Array<Post>,
  status: number,
  statusText: string
}
