import { Brand, BrandImage } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

export interface BrandState {
  data: Brand[]
  images: BrandImage[]
  countryWiseBrands: Record<string, Brand[]>
  uniqueCountries: string[]
}

const initialState: BrandState = {
  data: [],
  images: [],
  countryWiseBrands: {},
  uniqueCountries: [],
}

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    initBrands: (state, action: PayloadAction<Brand[]>) => {
      state.data = action.payload
      state.countryWiseBrands = action.payload.reduce((acc, curr) => {
        acc[curr.Country] = acc[curr.Country] || []
        acc[curr.Country].push(curr)
        return acc
      }, {} as BrandState["countryWiseBrands"])
      state.uniqueCountries = Object.keys(state.countryWiseBrands)
    },
    initImages: (state, action: PayloadAction<BrandImage[]>) => {
      state.images = action.payload
    },
    loadMore: (state) => {
      state.uniqueCountries = state.uniqueCountries.concat(
        Object.keys(state.countryWiseBrands)
      )
    },
  },
})

export const { initBrands, initImages, loadMore } = brandSlice.actions
export const selectBrands = (state: RootState) => state.brands.data
export const selectRandomImage = (state: RootState) =>
  state.brands.images.at(
    Math.floor(Math.random() * state.brands.images.length)
  )!["Image"]

export const selectUniqeCountries = (state: RootState) =>
  state.brands.uniqueCountries
export const selectCountryBrands = (country: string) => (state: RootState) =>
  state.brands.countryWiseBrands[country]

export const selectBrand = (brand: string) => (state: RootState) =>
  state.brands.data.filter((item) => item.Brand === brand)[0]
export default brandSlice.reducer
