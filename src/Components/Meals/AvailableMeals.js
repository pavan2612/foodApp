import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem'


const AvailableMeals = () => {
  const [staticMeals,setStaticMeals] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [error,setError] = useState('')


  const url ="https://practicereact-755c2-default-rtdb.firebaseio.com/meals.json"
  useEffect(() => { 
    fetch(url)
    .then((response)=>{
    return response.json()
  }).then((data)=>{
    const meals = []
    for (let key in data){
      meals.push({
        id:key,
        name:data[key].name,
        description:data[key].description,
        price:data[key].price
      })
}
    setStaticMeals(meals)
    setIsLoading(false)
  }).catch(error => {
    setError(error.message)
  })
  },[])

  if(isLoading){
    return (
      <section>
        <p className={styles.loading}>...Loading</p>
      </section>)
  }
if(error){
  return (
    <section>
      <p className={styles.error}>Something went wrong</p>
    </section>)
}
  const mealsList = staticMeals.map(item => 
    <MealItem
    id = {item.id} 
    key= {item.id}
    name={item.name} 
    description={item.description}
    price= {item.price}
    />)

    return(
    <section className={styles.meals}>
      <Card> 
        <ul> 
          {mealsList}
        </ul>
      </Card>
    </section>
    )
}

export default AvailableMeals