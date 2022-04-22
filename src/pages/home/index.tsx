import classes from "./index.module.css"
import { useCallback, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import {
  initBrands,
  initImages,
  loadMore,
  selectUniqeCountries,
} from "@/lib/redux/brandSlice"
import { Link } from "react-router-dom"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"

const Home = () => {
  const dispatch = useAppDispatch()
  const bottomBoundaryRef = useRef(null)
  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        console.error(response.statusText)
      })
      .then((data: any) => {
        dispatch(initBrands(data))
      })
      .catch(console.error)
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json"
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        console.error(res.statusText)
      })
      .then((data) => dispatch(initImages(data)))
      .catch(console.error)
  }, [])
  const uniqueCountries = useAppSelector(selectUniqeCountries)
  const onReachingBottom = useCallback(() => {
    // intentional delay
    setTimeout(() => {
      dispatch(loadMore())
    }, 1000)
  }, [])
  useInfiniteScroll(bottomBoundaryRef, onReachingBottom)
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {Array.isArray(uniqueCountries) &&
          uniqueCountries.map((country, i) => (
            <li key={`${country}-${i}`}>
              <Link to={encodeURI(`/country/${country}`)} className="link">
                {country}
              </Link>
            </li>
          ))}
      </ul>
      <div
        id="page-bottom-boundary"
        style={{ border: "4px solid red" }}
        ref={bottomBoundaryRef}
      >
        loading...
      </div>
    </div>
  )
}

export default Home
