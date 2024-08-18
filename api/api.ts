import { AxiosResponse } from 'axios';
import { ITodo } from '../types/Todo';
import instance from './instance';

const getAllTodos = async (): Promise<AxiosResponse<ITodo[]>> => {
	console.log('trying to get all todo');
	return instance.get<ITodo[]>('api/v1/todo');
};

const createTodo = async (
	title: ITodo['title'],
	description: ITodo['description']
): Promise<AxiosResponse<ITodo>> => {
	console.log('trying to create todo');
	return instance.post<ITodo>('api/v1/todo', { title, description });
};

const setStatusOfTodo = async (
	status: ITodo['status'],
	id: ITodo['id']
): Promise<AxiosResponse<ITodo>> => {
	console.log('trying to set status of todo');
	return instance.put<ITodo>(`api/v1/todo/status/${id}`, { status });
};

const updateTodo = async (
	title: ITodo['title'],
	description: ITodo['description'],
	id: ITodo['id']
): Promise<AxiosResponse<ITodo>> => {
	console.log('trying to update todo');
	return instance.put<ITodo>(`api/v1/todo/${id}`, { title, description });
};

const deleteTodo = async (id: ITodo['id']): Promise<AxiosResponse> => {
	console.log('trying to delete todo');
	return instance.delete(`api/v1/todo/${id}`);
};

const API = {
	getAllTodos,
	createTodo,
	setStatusOfTodo,
	updateTodo,
	deleteTodo,
};

export default API;
