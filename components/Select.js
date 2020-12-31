import React, { useRef } from 'react'
import useSelect from 'use-select'

// Create your select component
export default function Select({
                    value,
                    options,
                    onChange,
                    multi,
                    pageSize = 10,
                    itemHeight = 40
                  }) {
  // Create a ref for the options container
  const optionsRef = useRef()

  // Use useSelect to manage select state
  const {
    visibleOptions,
    selectedOption,
    highlightedOption,
    getInputProps,
    getOptionProps,
    isOpen
  } = useSelect({
    multi,
    options,
    value,
    onChange,
    optionsRef
  })

  // Build your select component
  return (
    <div>
      {multi ? (
        <div>
          {selectedOption.map(option => (
            <div key={option.value}>
              {option.value}{' '}
              <span
                onClick={() => onChange(value.filter(d => d !== option.value))}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
      <input {...getInputProps()} placeholder="Select one..." />
      <div>
        {isOpen ? (
          <div ref={optionsRef}>
            {!visibleOptions.length ? (
              <div>No options were found...</div>
            ) : null}
            {visibleOptions.map(option => {
              return (
                <div
                  {...getOptionProps({
                    option,
                    style: {
                      background: `${props =>
                        highlightedOption === option
                          ? 'lightblue'
                          : selectedOption === option
                          ? 'lightgray'
                          : 'white'}`
                    }
                  })}
                >
                  {option.label}
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}
