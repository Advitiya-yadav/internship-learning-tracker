from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Car(BaseModel):
    id: int
    name: str
    origin: str

cars: List[Car] = []

@app.get("/")
def read_root():
    return {"message": "WELCOME"}

@app.get("/carlist")
def return_cars():
    return cars

@app.post("/cars")
def add_cars(car: Car):
    cars.append(car)
    return car

@app.put("/cars/{car_id}")
def update_cars(car_id: int, updated_car: Car):
    for index, car in enumerate(cars):
        if car.id == car_id:
            cars[index] = updated_car
            return updated_car
    return {"error": "car not found"}

@app.delete("/cars/{car_id}")
def delete_car(car_id: int):
    for index, car in enumerate(cars):
        if car.id == car_id:
            deleted_car = cars.pop(index)
            return {
                "message": "car deleted",
                "car": deleted_car
            }

    return {"error": "car not found"}