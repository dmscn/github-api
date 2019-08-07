import React from 'react'
import App from './App'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('<App />', () => {
  it('renders', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
