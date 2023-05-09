import connection from '../../db.js';

const insertItem = (req, res) => {
  const newItem = req.body;

  const sql = `INSERT INTO list_items SET ? `;

  connection.query(sql, newItem, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        result: [],
        message: 'Some Internal Error While Saving List Item.',
      });
    } else {
      res.status(200).json({
        status: true,
        result: [],
        message: 'List Item Saved Successfully.',
      });
    }
  });
};

export default insertItem;
