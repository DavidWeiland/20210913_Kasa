import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"
import Home from './index'

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test("Fetching data", async () => {
  const fakeData = {locationsList:[{
      title: "FirstTitle",
      cover: "url",
      id: 123
  }]}
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
    ok:true,
    json:()=> Promise.resolve(fakeData)
    })
  )
  await act(async () => {
    render(<BrowserRouter><Home /></BrowserRouter>, container)
  })
  expect(container.querySelector(".gallery").textContent).toBe(fakeData.locationsList[ 0 ].title)
  global.fetch.mockRestore()
})

test("No data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok:false,
        status:"403, Forbidden"
        })
    )
    await act(async () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
            container
        )
    })
    expect(container.querySelector("h1").textContent).toBe(
       'loading data en cours...'
    )
    global.fetch.mockRestore()
})