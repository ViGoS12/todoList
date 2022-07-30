import { useRef, useEffect } from 'react'

export default function useWhyDidYouUpdate(name: any, props: any) {
  const previousProps = useRef() as any

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props })

      const changesObj: { [key: string]: any } = {}

      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          }
        }
      })

      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj)
      }
    }

    previousProps.current = props
  })
}
