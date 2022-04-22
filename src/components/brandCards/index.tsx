import classes from "./index.module.css"
import PCard from "./card"
import { Brand } from "@/types"

const Cards = ({ data }: { data: Brand[] }) => {
  return (
    <div className={classes.brands}>
      {data &&
        data.map((item, i) => <PCard {...item} key={`${item.Brand}-${i}`} />)}
    </div>
  )
}

export default Cards
