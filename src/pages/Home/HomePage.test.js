import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"
import Home from './index'

import { mockData } from "./../../Utils/mockData"

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
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData),
        })
    )
    await act(async () => {
        render(<BrowserRouter><Home /></BrowserRouter>, container)
    })
  
    expect(container.querySelector(".gallery").textContent).toBe(
        mockData.locationsList[0].title
    )
    global.fetch.mockRestore()
})

test("Echec Fetching Data", async () => {
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