// this addition will be used to make it use as a client component
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddTopic() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        //it prevents the default behaviour of refreshing the page once the button is clicked!!!
        e.preventDefault()

        if (!title || !description) {
            alert("Please provide with title and description to proceed!!")
        }
        try {
            const res = await fetch("/api/topics?_cacheBust=" + Date.now(), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            })

            if (res.ok) {
                router.push('/')
                router.refresh()
            }
            else {
                throw new Error("Failed to create a topic!!!")
            }
        }

        catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setTitle(e.target.value)} value={title} className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
            <input onChange={(e) => setDescription(e.target.value)} value={description} className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" />
            <button type="submit" className="bg-orange-500 py-3 px-6 w-fit">
                Submit
            </button>
        </form>
    )
}