import app from '../src'

describe('test', () => {
  test('app', () => {
    const status = app.status
    expect(status).toBe('RUNNING')
  })
})
