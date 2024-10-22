import { useMemo } from 'react';
import { ITask } from '../../interfaces'
import style from './style.module.scss'

interface IProps {
    data: ITask[];
}

export default function ToDoCounts({data}:IProps) {
    const allTasksCount = data.length;

    const completedTasksCount = useMemo(() => {
        return data.filter((task) => task.completed).length
    }, [data])

  return (
    <div className={style.counts}>
        <p>Всего: {allTasksCount} |</p>
        <p>Выполнено: {completedTasksCount} |</p>
        <p>Не выполнено: {allTasksCount - completedTasksCount}</p>
    </div>
  )
}
