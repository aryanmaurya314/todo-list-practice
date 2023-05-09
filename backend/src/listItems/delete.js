import connection from '../../db.js';

const deleteItemById = (req, res) => {
  const id = req.params.id;
  
  const sql = `DELETE FROM list_items WHERE id = ? `;

  connection.query(sql, id, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        result: [],
        message: 'Some Internal Error While Deleting List Item.',
      });
    } else {
      res.status(200).json({
        status: true,
        result: [],
        message: 'List Item Deleted Successfully.',
      });
    }
  });
};

export default deleteItemById;
