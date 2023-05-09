import connection from '../../db.js';

const fetchItems = (_, res) => {
  const sql = `SELECT * FROM list_items`;

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({
        status: false,
        result: [],
        message: 'Some Internal Error While Fetching List Items.',
      });
    } else {
      res.status(200).json({
        status: true,
        result: results,
        message: 'List Items Fetched Successfully.',
      });
    }
  });
};

export default fetchItems;
