import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList() {
    const expenses = [
        {
            title: 'Pack of cheese',
            price: 8.00,
            date: new Date(2023, 6, 30)
        },
        {
            title: 'Orange juice',
            price: 7.50,
            date: new Date(2023, 6, 30)
        },
        {
            title: 'Grape juice',
            price: 13.0,
            date: new Date(2023, 6, 30)
        },
        {
            title: 'Pack of coffee',
            price: 23.0,
            date: new Date(2023, 6, 30)
        }
    ];


    return (
        <section>
            <ExpenseItem className="expense-list" expense={expenses[0]} />
            <ExpenseItem className="expense-list" expense={expenses[1]} />
            <ExpenseItem className="expense-list" expense={expenses[2]} />
            <ExpenseItem className="expense-list" expense={expenses[3]} />
        </section>
    );
}
