import './ExpenseItemDate.css';

export default function ExpenseItemDate({ date }) {
    const year = date.getFullYear();
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const day = date.toLocaleString('pt-BR', { day: '2-digit' });

    return (
        <div className="expense-item-date">
            <div className="expense-item-date__month">{month}</div>
            <div className="expense-item-date__year">{year}</div>
            <div className="expense-item-date__day">{day}</div>
        </div>
    )
}