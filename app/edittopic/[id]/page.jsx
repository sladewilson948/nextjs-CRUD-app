
import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {

    try {

        const res = await fetch(`https://nextjs-crud-d0adj0jmy-aman-dubeys-projects-e285f962.vercel.app/api/topics/${id}`, { cache: "no-store" })
        if (!res.ok) {
            throw new Error("Failed to fetch the topic")
        }
        
        return res.json()
    }
    catch (error) {
        console.log("Error fetching the data!!");
    }
}

export default async function EditTopic({ params }) {
    const { id } = params
    const { topic } = await getTopicById(id)
    const { title, description } = topic
    
    return <EditTopicForm id={id} title = {title} description = {description}/>
}