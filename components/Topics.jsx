import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"


const getTopics = async () => {

    try {
        const res = await fetch('http://localhost:3000/api/topics', { cache: "no-store" });

        if (!res.ok) {

            throw new Error("Error while fetching the data!!")
        }

        return res.json()
    }
    catch (error) {
        console.log("Error loading the topics!!", error);
    }
}


export default async function Topics() {


    const {topics} = await getTopics()
    return (
        <>
            {topics.map((t) => (
                <div key = {t._id} className="p-4 border border-black my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={t._id}/>
                        <Link href={`/edittopic/${t._id}`}><HiPencilAlt size={24} /></Link>
                        <h2></h2>
                    </div>
                </div>
            ))}
        </>
    )
}