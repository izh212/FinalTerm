import { useSelector } from "react-redux"
import { selectCategory } from "../store/CategorySlice"
import { selectEmoji } from "../store/EmojiSlice"
function Details() {
    const category = useSelector(selectCategory)
    const emoji = useSelector(selectEmoji)



  return (
    <div>
        <h1>Details</h1>
    {emoji.filter((item) => item.category === category).map((item, index) => (
        <div key={index}>
            <p>{index +1}. Name: {item.name} Group:{item.group} Category: {item.category}</p>
        </div>

        )
    )
    }
    </div>
  )
}

export default Details