class Animal:
    def __init__(self, name: str) -> str:
        self.name = name

    def make_sound(self) -> str:
        print(f'{self.name} made a sound')


class Mammal(Animal):
    def breastfeed(self) -> None:
        print(f'{self.name} is breastfeeding')


class Dog(Mammal):
    def bark(self) -> None:
        print(f'{self.name} is barking')


dog = Dog('Rex')
dog.bark()
dog.breastfeed()
dog.make_sound()
