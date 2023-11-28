class Product:
    def __init__(self, price: float) -> None:
        self.price = price

    def print_price(self) -> None:
        raise NotImplementedError(
            "Precisa implementar o método price")


class Book(Product):
    def __init__(self, price: float) -> None:
        super().__init__(price)

    def print_price(self) -> None:
        print(f"O preço do livro é R$ {self.price}")


book = Book(20)
book.print_price()
