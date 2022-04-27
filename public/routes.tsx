import { App } from './App'
import { About } from './About'

export const routes : any[] = [
    { path: '*', element: <App name={'koko'}/>},
    { path: 'about', element: <About/>},
]

