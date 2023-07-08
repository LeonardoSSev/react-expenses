import './ExpenseList.css'

import Card from '../../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList(props) {
    return (
        <Card className="expense-list">
            <ExpenseItem className="expense-list" expense={props.expenses[1]} />
            <ExpenseItem className="expense-list" expense={props.expenses[2]} />
            <ExpenseItem className="expense-list" expense={props.expenses[0]} />
            <ExpenseItem className="expense-list" expense={props.expenses[3]} />
        </Card>
    );
}
