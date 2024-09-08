const instance = 'https://opentdb.com/'

export async function fetchCategories() {
  const response = await fetch(`${instance}api_category.php`)
  return await response.json()
}
