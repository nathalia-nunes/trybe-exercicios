class Rectangle:
    def __init__(self, base: int, height: int) -> None:
        self.base = base
        self.height = height

    def calculate_area(self) -> int:
        return self.base * self.height

    def calculate_perimeter(self) -> int:
        return 2 * (self.base + self.height)


rectangle = Rectangle(10, 20)
print(rectangle.calculate_area())
print(rectangle.calculate_perimeter())
