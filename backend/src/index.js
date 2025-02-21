// import dotenv from 'dotenv'
// dotenv.config()

import { app } from './app.js'
import { UNEXPECTED_ERROR, PORT } from './config.js'
import { PyDolar } from './services/pydolarave.js'

app.get('/:currency', async (req, res) => {
  const { currency } = req.params

  try {
    const monitorsData = await PyDolar.monitorsData({ currency })
    if (monitorsData.error) {
      res.status(400).json(monitorsData)
      return
    }

    res.json(monitorsData)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: UNEXPECTED_ERROR })
  }
})

app.listen(PORT, () => console.log(`server on port: http://localhost:${PORT}`))
