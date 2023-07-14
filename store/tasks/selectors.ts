import { FilterProps, State } from '../../types/state';
import { NameSpace } from '../../constants/constants';
import { TaskProps } from '@/types/tasks';

export const getAllTasks = (state: State): TaskProps[] => state[NameSpace.Tasks].tasks;
export const getFilters = (state: State): FilterProps[] => state[NameSpace.Tasks].filters;
