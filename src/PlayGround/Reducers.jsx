import React from 'react'
import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'

function Reducers() {
  const addExpence = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt,
    },
  })

  const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
  })
  const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
  })
  const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
  })
  // SORT_BY_DATE
  const sortByDate = () => ({
    type: 'SORT_BY_DATE',
  })
  // SORT_BY_AMOUNT
  const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
  })
  // SET_START_DATE
  const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
  })
  // SET_END_DATE
  const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate,
  })
  const expensesReducerDefaultState = []
  const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return [...state, action.expense]
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id != action.id)
      case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if (expense.id == action.id) {
            return {
              ...expense,
              ...action.updates,
            }
          } else {
            return expense
          }
        })
      default:
        return state
    }
  }

  const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  }

  const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text,
        }
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount',
        }
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date',
        }
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate,
        }
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate,
        }
      default:
        return state
    }
  }
  //get visible expenses
  const getVisibleExpenses = (
    expenses,
    { text, sortBy, startDate, endDate }
  ) => {
    return expenses
      .filter((expense) => {
        const startDateMatch =
          typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch =
          typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description
          .toLowerCase()
          .includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
      })
      .sort((a, b) => {
        if (sortBy == 'date') {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
          return a.amount < b.amount ? 1 : -1;
        }
      })
  }

  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    })
  )
  store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
  })

  const expense1 = store.dispatch(
    addExpence({ description: 'Rent', amount: 100, createdAt: -1000 })
  )
  const expense2 = store.dispatch(
    addExpence({ description: 'Coffe', amount: 400, createdAt: -100 })
  )

  // store.dispatch(removeExpense({ id: expense1.expense.id }))
  // store.dispatch(editExpense(expense2.expense.id,{amount:50}))
  // store.dispatch(setTextFilter('ffe'));
  // store.dispatch(setTextFilter(''));
  store.dispatch(sortByAmount());
  // store.dispatch(sortByDate());
  // store.dispatch(setStartDate(0));
  // store.dispatch(setEndDate(999));

  const demoState = {
    expenses: [
      {
        id: 'poijasdfhwer',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0,
      },
    ],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined,
    },
  }

  return <div>Reducers</div>
}

export default Reducers
