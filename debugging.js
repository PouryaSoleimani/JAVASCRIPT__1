const user = { id: 1, name: 'MAMAD', age: 22 }

try {
  if (user.age < 25) { throw new Error('USER IS UNDER AGE') }
} catch (error) {
  console.error("🛑🛑🛑", error)
} finally {
  console.log('FINALLY')
}
