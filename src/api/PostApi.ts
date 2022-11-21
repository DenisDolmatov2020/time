import http from './axios.config'
import { Post } from '@/types/Post'

class PostApi {
  getAll (): Promise<any> {
    return http.get('/posts')
  }

  get (id: string): Promise<any> {
    return http.get(`/post/${id}`)
  }

  create (data: any): Promise<any> {
    return http.post('/posts', data)
  }

  update (id: string, data: Post): Promise<any> {
    return http.put(`/tutorials/${id}`, data)
  }

  delete (id: string): Promise<any> {
    return http.delete(`/tutorials/${id}`)
  }

  deleteAll (): Promise<any> {
    return http.delete('/tutorials')
  }

  findByTitle (title: string): Promise<any> {
    return http.get(`/tutorials?title=${title}`)
  }
}

export default new PostApi()
