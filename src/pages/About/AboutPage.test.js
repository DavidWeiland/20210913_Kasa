import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "@testing-library/react"
import About from './index'

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container=null
})

test("Fetching Data", async () => {
  const mockData = {
      aboutText: [
          {
              title: "Test Title About",
              describe:
                  "Test Describe About",
          }
      ]
  }
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json:()=>Promise.resolve(mockData)
    })
  )
  await act(async () => {
    render(<About />, container)
  })
  expect(container.querySelector(".gallery-2").textContent).toContain(
    mockData.aboutText[ 0 ].title
  )
  expect(container.querySelector(".gallery-2").textContent).toContain(
      mockData.aboutText[0].describe
  )
  global.fetch.mockRestore()
})

test("Echec Fetching Data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: false,
          json: () => Promise.resolve(),
            status:"403, Forbidden"
        })
    )
    await act(async () => {
        render(<About />, container)
    })
    expect(container.querySelector("h1").textContent).toBe("loading data en cours...")
    expect(container.querySelector(".gallery-2")).toBe(null)
    global.fetch.mockRestore()
})