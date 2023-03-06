interface App {
  status: string
}

const app: App = {
  status: 'RUNNING',
}

console.log(`LOG => ${JSON.stringify(app)}`)

export default app
