import { useState } from "react"
import React from 'react'

const data = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of youand what you love.",
    },
    {
        id: 2,
        title: "We are available all across the globe",
        desc: "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        id: 3,
        title: "Manufactured with the best materials",
        desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

export default function Showcase() {
    const [items] =useState(data)
  return (
    <>
        <h1>Showcase</h1>
    </>
  )
}
