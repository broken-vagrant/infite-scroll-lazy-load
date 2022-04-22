import classes from "./index.module.css"
import { useParams } from "react-router"
import Cards from "@/components/brandCards"
import { useAppSelector } from "@/hooks/redux"
import { selectCountryBrands } from "@/lib/redux/brandSlice"
import { useLazyLoading } from "@/hooks/useLazyLoading"

const get5x = (value: Array<any>) => {
  if (!Array.isArray(value)) return []
  let i = 5
  while (i > 0) {
    value = value.concat(value)
    i--
  }
  return value
}
const Detail = () => {
  const { code } = useParams()
  useLazyLoading(".lazy")
  if (!code) return <div>invalid query param</div>
  const brands = useAppSelector(selectCountryBrands(code))
  const brandsFiveTimes = get5x(brands)
  return (
    <div className={classes.wrapper}>{<Cards data={brandsFiveTimes} />}</div>
  )
}

export default Detail
