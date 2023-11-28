Book("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99)
DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)

def print_details(product: Product) -> None:
    print(f"Descrição: {product.description()}")
    print(f"Preço: {product.price()}")

products = [
    Book("O Senhor dos Anéis", "J.R.R. Tolkien", 29.99),
    DVD("O Poderoso Chefão", "Francis Ford Coppola", 19.99)
]

for product in products:
    print_details(product)

# Saída:
# Descrição: O Senhor dos Anéis por J.R.R. Tolkien
# Preço: 29.99
# Descrição: O Poderoso Chefão dirigido por Francis Ford Coppola
# Preço: 19.99