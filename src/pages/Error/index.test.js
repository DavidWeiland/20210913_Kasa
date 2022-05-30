import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom" //for component using a Router element like Link
import Error from "./index"

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

test("Error displayed", () => {
    act(() => {
        render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>,
            container
        )
    })
    //now the component is built, testing it
  expect(container.querySelector("h1").textContent).toBe("404")
  expect(container.querySelector("h2").textContent).toBe(
      "Oups! La page que vous demandez n'existe pas."
  )
  expect(container.querySelector("a").textContent).toBe(
      "Retourner sur la page d'acceuil"
  )
})

