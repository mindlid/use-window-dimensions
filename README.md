## A react hook for getting a variable previous state

### Install

```
npm i @saulpalv/use-window-dimensions

//or

yarn add @saulpalv/use-window-dimensions
```

### Usage

```tsx
import type { FC } from 'react'
import { useWindowDimensions } from '@saulpalv/use-window-dimensions'

export const App: FC = () => {
  const { height, width } = useWindowDimensions()

  return (
    <div >
      <h4>Resize me</h4>
      <span>Current height is {height} </span><br/>
      <span>Current width is {width}</span>
    </div>
  )
}
```
