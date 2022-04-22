import { selectRandomImage } from "@/lib/redux/brandSlice"
import { Brand } from "@/types"
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import classes from "./card.module.css"

const BrandCard = React.memo((item: Brand) => {
  const randomImage = useSelector(selectRandomImage)
  return (
    <div className={classes.card}>
      <Link
        to={encodeURI(`/brand/${item.Brand}`)}
        style={{ textDecoration: "none" }}
      >
        <div className={classes.card__logo}>
          <img
            data-src={randomImage}
            alt={`Showcase image of ${item.Brand}`}
            className="lazy"
          ></img>
        </div>
        <div className={classes.card__details}>
          <h2>{item.Brand}</h2>
          <dl>
            <div>
              <dt>Stars</dt>
              <dd>{item.Stars}</dd>
            </div>
            <div>
              <dt>Country</dt>
              <dd>{item.Country}</dd>
            </div>
            <div>
              <dt>Style</dt>
              <dd>{item.Style}</dd>
            </div>
            <div>
              <dt>variety</dt>
              <dd>{item.Variety}</dd>
            </div>
            <div>
              <dt>Top ten</dt>
              <dd>{item["Top Ten"]}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </div>
  )
})

export default BrandCard
