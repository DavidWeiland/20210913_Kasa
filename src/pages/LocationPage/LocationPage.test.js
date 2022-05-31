import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'
import {createMemoryHistory} from 'history'
import { act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"
import LocationPage from './index'

import {mockData} from './../../Utils/mockData'


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

test("Go specific path", () => {
    const history = createMemoryHistory()
    const locationId = mockData.locationsList[0].id
    
    act(() => {
        history.push(`/location/${locationId}`)
        render(
            <Router location={history}>
                <LocationPage
                    match={{
                        params: { idLocation: `${locationId}` },
                        isExact: true,
                        path: `/location/:idLocation`,
                        url: `/location/${locationId}`,
                    }}
                />
            </Router>,
            container
        )
    })
    
    expect(history.location.pathname).toEqual(`/location/${locationId}`)
})

test("Fetching data", async () => {
    const history = createMemoryHistory()
    const locationId = mockData.locationsList[0].id
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData),
        })
    )
    
    await act(async () => {
        history.push(`/location/${locationId}`)
        render(
            <Router location={history}>
                <LocationPage
                    match={{
                        params: { idLocation: `${locationId}` },
                        isExact: true,
                        path: `/location/:idLocation`,
                        url: `/location/${locationId}`
                    }}
                />
            </Router>,
            container
        )
    })
        
    expect(container.querySelector(".body").textContent).toContain(
        mockData.locationsList[0].title
    )
  
    global.fetch.mockRestore()
})

test("Echec Fetching Data", async () => {
    const history = createMemoryHistory()
    const locationId = mockData.locationsList[ 0 ].id
  
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: false,
            json: () => Promise.resolve(mockData),
            status:"403, Forbidden"
        })
    )
  
    await act(async () => {
        history.push(`/location/${locationId}`)
        render(
            <Router location={history}>
                <LocationPage
                    match={{
                        params: { idLocation: `${locationId}` },
                        isExact: true,
                        path: `/location/:idLocation`,
                        url: `/location/${locationId}`
                    }}
                  />
            </Router>,
            container
        )
    })
    
    expect(container.querySelector("h1").textContent).toContain(`loading data : ${locationId} en cours...`)
  
    global.fetch.mockRestore()
})

test("Echec match data/url", async () => {
    const history = createMemoryHistory()
    const locationId = "wrongId"
  
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData),
            status: "403, Forbidden",
        })
    )
    
    await act(async () => {
        history.push(`/location/${locationId}`)
        render(
            <Router location={history}>
                <LocationPage
                    match={{
                        params: { idLocation: `${locationId}` },
                        isExact: true,
                        path: `/location/:idLocation`,
                        url: `/location/${locationId}`,
                    }}
                />
            </Router>,
            container
        )
    })
  
    expect(container.querySelector(".body-error")).toBeTruthy()
    
    global.fetch.mockRestore()
})