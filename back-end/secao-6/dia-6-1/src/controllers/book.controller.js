const BookService = require('../../src/services/book.service');

const getAll = async (_req, res) => { 
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll, 
};