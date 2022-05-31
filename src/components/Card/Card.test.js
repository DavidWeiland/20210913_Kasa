import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom' //for component using a Router element like Link
import Card from './index'

//creates a test container to run test without affecting the final dom
let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})
//deletes test container after each test
afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('Card without title (return defaultProps value)', () => {
  //build of component
  act(() => {
      render(
          <BrowserRouter>
              <Card />
          </BrowserRouter>,
          container
      )
  })
  //now the component is built, testing it
  expect(container.textContent).toBe("")
})

test("Card with title", () => {
  act(() => {
      render(
          <BrowserRouter>
              <Card title="First Title" />
          </BrowserRouter>,
          container
      )
  })
  expect(container.textContent).toBe("First Title")

  act(() => {
      render(
          <BrowserRouter>
              <Card title="Second Title" />
          </BrowserRouter>,
          container
      )
  })
  expect(container.textContent).toBe("Second Title")
})