import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "@testing-library/react"
import AboutCard from "./index"

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

test("Play Toggle", () => {
    act(() => {
        render(<AboutCard />, container)
    })
    const button = document.querySelector("img")

    //First state of toggle : toogle-icon is opened and describe container is displayed
    expect(button.getAttribute("class")).toContain("open")
    expect(
        container.querySelector(".about-item-describe-container")
    ).toBeTruthy()
})

test("Play Toggle to close", () => {
    act(() => {
        render(<AboutCard />, container)
    })
    const button = document.querySelector("img")

    //mouseEvent on toggle-icon once
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    //toogle-icon is closed and describe container is hidden
    expect(button.getAttribute("class")).not.toContain("open")
    expect(
        container.querySelector(".about-item-describe-container")
    ).toBeFalsy()
})

test("Play Toggle to open again", () => {
    act(() => {
        render(<AboutCard />, container)
    })
    const button = document.querySelector("img")

    //mouseEvent on toggle-icon twice
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    //toogle-icon is opened and describe container is displayed
    expect(button.getAttribute("class")).toContain("open")
    expect(
        container.querySelector(".about-item-describe-container")
    ).toBeTruthy()
})