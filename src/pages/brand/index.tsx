import React from "react"
import classes from "./index.module.css"
import { useParams } from "react-router-dom"
import { useAppSelector } from "@/hooks/redux"
import { selectBrand, selectRandomImage } from "@/lib/redux/brandSlice"

interface BrandProps {}

const Brand: React.FC<BrandProps> = ({}) => {
  const { id } = useParams()
  if (!id) return <div>invalid query</div>
  const brand = useAppSelector(selectBrand(id))
  const randomImage = useAppSelector(selectRandomImage)
  if (!brand) return <div>brand not found</div>
  return (
    <div className={classes.wrapper}>
      <section className={classes.brand}>
        <div className={classes.img_w}>
          <img src={randomImage}></img>
        </div>
        <div className={classes.details}>
          <h2>{brand.Brand}</h2>
          <div>
            <div className={classes.dls}>
              <dl>
                <div>
                  <dt>Stars</dt>
                  <dd>{brand.Stars}</dd>
                </div>
                <div>
                  <dt>Country</dt>
                  <dd>{brand.Country}</dd>
                </div>
                <div>
                  <dt>Style</dt>
                  <dd>{brand.Style}</dd>
                </div>
                <div>
                  <dt>variety</dt>
                  <dd>{brand.Variety}</dd>
                </div>
                <div>
                  <dt>Top ten</dt>
                  <dd>{brand["Top Ten"]}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Brand
