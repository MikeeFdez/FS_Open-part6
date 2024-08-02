import axios from 'axios'

export const getAnecdotes = () => {
    return axios.get('http://localhost:3001/anecdotes').then(res => res.data)
  }

export const createAnecdote = (anecdote) => {
    return axios.post('http://localhost:3001/anecdotes', anecdote).then(res => res.data)
}

export const updateAnecdote = (updatedAnecdote) => {
    return axios.put(`http://localhost:3001/anecdotes/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)
}