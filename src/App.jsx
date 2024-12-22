import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './routes/Home'
import { NotFound } from './routes/NotFound'
import { Todos } from './routes/Todos'

function App() {
// Whats Left is the pagination
    return (
        <main>
            <Routes>
                <Route path='/home' element={<Home />}>
                    <Route path=':id' element={<Todos />} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default App
