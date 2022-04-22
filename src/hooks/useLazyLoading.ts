import { useCallback, useEffect, useRef } from "react"

// lazy load images with intersection observer
export const useLazyLoading = (imgSelector: string) => {
  const imgObserver = useCallback((node) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          const currentImg = en.target as HTMLImageElement

          const newImgSrc = currentImg.dataset.src

          // only swap out the image source if the new url exists
          if (!newImgSrc) {
            console.error("Image source is invalid")
          } else {
            currentImg.src = newImgSrc
          }
          intObs.unobserve(node)
        }
      })
    })
    intObs.observe(node)
  }, [])

  useEffect(() => {
    document.querySelectorAll(imgSelector).forEach((img) => imgObserver(img))
  }, [imgObserver, imgSelector])
}
