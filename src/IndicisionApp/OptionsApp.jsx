import React from 'react'
import OptionApp from './OptionApp'

function OptionsApp(props) {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map((option) => (
        <OptionApp
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  )
}

export default OptionsApp
